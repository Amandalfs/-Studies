function iniciar() {
    let panel = document.getElementById('panel');
    panel.innerHTML += `<h2>Contando de 1 ate 10</h2>`
    for(let i = 1; i<11; i++) {
       panel.innerHTML += `${i} &#x1F449;`
    }
    panel.innerHTML += `&#x1F3C1`
}