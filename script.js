function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let expression = document.getElementById("display").value;

    try {
        expression = expression.replace(/sin/g, "Math.sin");
        expression = expression.replace(/cos/g, "Math.cos");
        expression = expression.replace(/tan/g, "Math.tan");

        document.getElementById("display").value = eval(expression);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", function (e) {
    const allowed = "0123456789+-*/().";

    if (allowed.includes(e.key)) {
        press(e.key);
    }

    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    }
});

/* THEME SWITCH */
const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
});
