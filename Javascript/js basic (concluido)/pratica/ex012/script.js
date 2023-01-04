function Analisar() {
    let res = document.getElementById('res');
    let msg = '';
    let n = Number(prompt("Digite um numero: "));
    if(n%2===0) {
        msg = "Par!"
    } else {
        msg = "Impar!"
    }
    res.innerHTML = `<p> O numero ${n} é <strong>${msg}</strong> </p>`
}