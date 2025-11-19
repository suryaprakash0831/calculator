// SOUND EFFECT
const clickSound = new Audio("https://assets.mixkit.co/sfx/download/mixkit-modern-click-box-1120.wav");

// BUTTON PRESS
function press(value) {
    playSound();
    ripple(event);
    document.getElementById("display").value += value;
}

// EVALUATION + HISTORY
function calculate() {
    playSound();
    let display = document.getElementById("display");
    let exp = display.value;

    try {
        exp = exp.replace(/sin/g, "Math.sin");
        exp = exp.replace(/cos/g, "Math.cos");
        exp = exp.replace(/tan/g, "Math.tan");

        let result = eval(exp);
        display.value = result;

        addHistory(exp + " = " + result);
    } catch {
        display.value = "Error";
    }
}

// CLEAR DISPLAY
function clearDisplay() {
    playSound();
    document.getElementById("display").value = "";
}

// HISTORY ADD
function addHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    document.getElementById("historyList").appendChild(li);
}

// THEME SWITCH
document.getElementById("themeSwitch").addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});

// RIPPLE EFFECT
function ripple(e) {
    const button = e.target;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    button.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
}

// SOUND
function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

// KEYBOARD SUPPORT
document.addEventListener("keydown", function (e) {
    const allowed = "0123456789+-*/().";

    if (allowed.includes(e.key)) press(e.key);
    if (e.key === "Enter") calculate();
});

// TABS
function openTab(tabName) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-button").forEach(t => t.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    event.target.classList.add("active");
}

// GRAPHING LOGIC
function plotGraph() {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");
    const input = document.getElementById("graphInput").value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#00ff9d";
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        let realX = (x - canvas.width / 2) / 30;

        try {
            let y = eval(input.replace(/x/g, realX));
            let plotY = canvas.height / 2 - y * 30;

            ctx.lineTo(x, plotY);
        } catch {}
    }

    ctx.stroke();
}
