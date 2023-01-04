function Comparar() {
    let result = document.getElementById('res');
    msg = 0;
    let num1 = Number(prompt("Digite um numero"));
    let num2 = Number(prompt("Digite outro numero"));
    if (num1 > num2){msg = num1} 
    else {msg = num2}
    result.innerHTML = (`<p> Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, O maior valor é <strong>${msg}</strong> </p>`)
}