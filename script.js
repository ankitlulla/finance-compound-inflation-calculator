function calculate() {
    let P = parseFloat(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value) / 100;
    let i = parseFloat(document.getElementById("inflation").value) / 100;
    let t = parseFloat(document.getElementById("time").value);
    let n = parseFloat(document.getElementById("frequency").value);

    if (isNaN(P) || isNaN(r) || isNaN(i) || isNaN(t)) {
        document.getElementById("result").innerHTML = "Please fill all fields correctly";
        return;
    }

    let nominal = P * Math.pow((1 + r / n), n * t);
    let realRate = ((1 + r) / (1 + i)) - 1;
    let realValue = P * Math.pow((1 + realRate / n), n * t);

    document.getElementById("result").innerHTML = `
        <strong>Nominal:</strong> ₹${nominal.toFixed(2)}<br>
        <strong>Real (after inflation):</strong> ₹${realValue.toFixed(2)}<br>
        <strong>Loss to inflation:</strong> ₹${(nominal - realValue).toFixed(2)}
    `;
}
