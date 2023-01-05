function buscar(){
    let panel = document.getElementById('panel');
    let mes = prompt("Digite o mês em extenso (ex: Setembro)");
    let estacao = '';
    if(mes === "Dezembro" || mes === "Janeiro" || mes === "Fevereiro") {
        estacao = "Verão"
    } else if (mes === "Setembro" || mes === "Outubro" || mes === "Novembro") {
        estacao = "Primavera"
    } else if (mes === "Março" || mes === "Abril" || mes === "Maio") {
        estacao = "Outono"
    } else if (mes === "Junho" || mes === "Julho" || mes === "Agosto") {
        estacao = "Inverno"
    } else {
        estacao = "INDEFINIDA"
    }
    
    panel.innerHTML = `<p>No mês <mark>${mes}</mark>, estamos na estação <mark>${estacao}</mark></p>`;

}