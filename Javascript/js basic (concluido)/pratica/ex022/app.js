function iniciar() {
    let panel = document.getElementById("panel");
    panel.innerHTML += `<h2>Contando de 1 a 10 (Marcando os Pares)</h2>`
    for(let c = 1; c<11; c++){
        if(c%2===0) {
            panel.innerHTML += `<mark>${c}</mark> &#x1F449;` 
        } else {
            panel.innerHTML += `${c} &#x1F449;`
        }
    }
    panel.innerHTML += `&#x1F3C1`
}