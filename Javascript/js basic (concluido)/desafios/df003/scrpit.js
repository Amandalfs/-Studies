function iniciar(){
    let numero = Number(prompt(`Digite um numero inteiro qualquer!`));
    let ants = numero-1;
    let depois = numero +1;
    alert(`
        Antes de ${numero}, temos o numero ${ants}
        Depois de ${numero}, temos o numero ${depois}
    `)
}