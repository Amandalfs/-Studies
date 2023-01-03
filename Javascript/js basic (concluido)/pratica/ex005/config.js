alert("Bem Vindo ao meu programa ");


function clicou() {
    let res = document.getElementById('res');
    let num = Number(prompt("Digite um numero").value); 
    res.innerHTML = (`<p> O Dobro de ${num} é ${num*2} e a metade é ${num/2} </p>`)
}