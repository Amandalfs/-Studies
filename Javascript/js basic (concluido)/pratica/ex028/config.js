function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

function iniciar(){
    let panel = document.getElementById('panel');
    let num = document.getElementById('txtNumber');
    num = Number(num.value);
    panel.innerHTML += `<h2>Calculando Fatorial de ${num}</h2>`;
    let fat = fatorial(num);
    if (fat===1){
        panel.innerHTML += ` 1 X`
    } else {
        for(let c = num; c>1; c--){
            panel.innerHTML += ` ${c} X`
        }
    }

    panel.innerHTML += ` 1 = ${fat}`;
}