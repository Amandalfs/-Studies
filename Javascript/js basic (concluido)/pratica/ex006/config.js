function clicou() {
    let num1 = Number(prompt("Digite um numero: "));
    let num2 = Number(prompt("Digite o segundo numero: "));
    let res = document.getElementById('res');
    res.innerHTML = (`<p> A soma entre <mark>${num1}</mark> e <mark>${num2}</mark> é igual a <strong>${num1 + num2}</strong>! </p>`);
}