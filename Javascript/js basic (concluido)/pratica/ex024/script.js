function iniciar(){
    let panel = document.getElementById('panel');
    panel.innerHTML += `<h2>Contando de 10 a 1</h2>`
    for(let c = 10; c>=1; c--){
        panel.innerHTML += `${c} &#x1F449;`
    }
    panel.innerHTML += `&#x1F3C1;`
}