function iniciar(){
    let final = document.getElementById('txtNumber');
    final = Number(final.value)
    let panel = document.getElementById('panel');
    panel.innerHTML += `<h2>Contando de 0 até ${final}</h2>`
    if (final >= 0){
        for (let c = 0; c<=final; c++){
            panel.innerHTML += `${c} &#x1F449;`
        }
    }
    panel.innerHTML += `&#x1F3C1;`
}