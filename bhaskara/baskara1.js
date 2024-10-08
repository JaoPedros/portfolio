function baskara() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const resultado = document.getElementById('resultado');

    if (a === 0) {
        resultado.textContent = "O coeficiente A não pode ser zero.";
        resultado.style.color = "red";
        return;
    }

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        resultado.textContent = "Não existem raízes reais.";
        resultado.style.color = "red";
    } else {
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        resultado.textContent = `As raízes são: ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`;
        resultado.style.color = "green";
    }
}
