function calcular(){
    let panel = document.getElementById('panel');
    let carteira = Number(document.getElementById('txtReais').value);
    let cota = Number(document.getElementById('txtCota').value);
    let resultado = carteira/cota
    panel.innerHTML = '';
    cota = cota.toLocaleString('en-US', {style: 'currency', currency:'USD'});
    carteira = carteira.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    resultado = resultado.toLocaleString('en-US', {style: 'currency', currency:'USD'});
    panel.innerHTML += `<p>Voce esta com ${carteira} e a cotacao ta em  ${cota}, convertendo daria ${resultado}</p>`

}