function Adivinhar() {  
    let  res = document.getElementById('result')
    let random = Math.floor(Math.random()*100 + 1);
    let n = Number(prompt("Digite o numero que voce acha que eu pensei..."));
    let msg = '';
    if (n === random) {
        msg = "IGUAL"
    } else if (n > random) {
        msg = "MENOR"
    } else  if (n < random) {
        msg = "MAIOR"
    }

    res.innerHTML += `<p>Você falou ${n}. Meu número é <strong>${msg}</strong></p>`
}