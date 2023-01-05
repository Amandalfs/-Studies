function iniciar(){
    let _inicio = document.getElementById('txtInicio');
    let _final = document.getElementById('txtFinal');
    let panel = document.getElementById('panel');
    let inicio = Number(_inicio.value);
    let final = Number(_final.value);
    panel.innerHTML += `<h2>Contando de ${inicio} até ${final}</h2>`
    if (final>inicio) {
        for(let c = inicio; c<=final; c++){
            panel.innerHTML += `${c} &#x1F449;`
        }
    } else if (final<inicio) {
        for(let c = inicio; c>=final; c--){
            panel.innerHTML += `${c} &#x1F449;`
        }
    } else if (final === inicio) {
        panel.innerHTML += `Não é possível contar, pois os números são iguais `;
    }

    panel.innerHTML += `&#x1F3C1;`

}