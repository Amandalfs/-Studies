function iniciar(){
    let panel = document.getElementById("panel")
    panel.innerHTML += `<h2>Contando....</h2>`
    for (let c = 1; c<11; c++) {
        if (c%2 === 0) {
            panel.innerHTML += `${c} &#x1F449;`
        }
        
    }
    panel.innerHTML += `&#x1F3C1`
}