function clicou() {
    let nome = prompt("Qual o seu nome ?");
    let div = document.getElementById('res');
    div.innerHTML = (`Olá, <strong>${nome}</strong>! é muito prazer te conhecer! &#x1F596`)
}