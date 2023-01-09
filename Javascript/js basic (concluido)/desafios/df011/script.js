function anoBissexto(ano){
    if (ano%4===0) {
        return true
    } else {
        return false
    }
}

function verificar(){
    let panel = document.getElementById('panel');
    let ano = Number(document.getElementById('numAno').value);
    let msg;
    panel.innerHTML = '';
    if (anoBissexto(ano)) {
        msg = `<mark style="background-color: rgb(72, 255, 72);">E BISSEXTO</mark> &#x2714;`
    } else {
        msg = `<mark style="background-color: rgb(255, 84, 84);">NÂO E BISSEXTO</mark> &#x274C;`
    }
    panel.innerHTML += `<h1>Analisando o ano de ${ano}...</h1>`;
    panel.innerHTML += `<p>O ano de ${ano} ${msg}</p>`;
}