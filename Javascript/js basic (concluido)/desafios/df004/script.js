function comprar(){
    let nomeProduto = prompt(`Que produto voce esta comprando?`);
    let valorParaPagar = Number(prompt(`Quantos custa ${nomeProduto} que voce esta comprando?`));
    let bolso = Number(prompt(`Qual foi o valor que voce deu para pagar ${nomeProduto}?`));
    let troco = bolso - valorParaPagar;
    valorParaPagar = valorParaPagar.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    troco = troco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    bolso = bolso.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    alert(`
    Voce comprou ${nomeProduto} que custou  ${valorParaPagar}.
    Voce deu ${bolso} em dinheiro e vai receber ${troco} de troco.
    Volte Sempre!`)
}