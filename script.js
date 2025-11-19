function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let expression = document.getElementById("display").value;

    try {
        // Replace sin, cos, tan for JS Math functions
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
