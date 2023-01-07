const bancoDeDadosCupom = [
    {
        desc: 25,
        nCupom: 'EX57C',
    },
    {
        desc: 10,
        nCupom: 'IX14X',
    },
    {
        desc: 8,
        nCupom: 'FWF17',
    },
    {
        desc: 7,
        nCupom: '14FVW',
    }, 
    
]

function verificarFalseOrTrue(cup, arr){
    for (let el of arr) {
        const {nCupom} = el;
        if (nCupom === cup) {
            return true;
        }
    }
    
    return false;
    
}

function verificarValorCupom(cup, arr) {
    for (let el of arr) {
        const {nCupom, desc} = el;
        if (nCupom === cup) {
            return desc
        } 
    } 
}


function iniciar(){
    let panel = document.getElementById('panel');
    let nomeProduto = document.getElementById('lblNome');
    nomeProduto = String(nomeProduto.value);
    let valorBruto = Number((document.getElementById('lblValor')).value);
    let cupom = document.getElementById('lblCupom');
    cupom = String(cupom.value);
    let precoComDesconto;
    if (verificarFalseOrTrue(cupom, bancoDeDadosCupom)) {
        let _desco = verificarValorCupom(cupom, bancoDeDadosCupom);
        precoComDesconto = valorBruto - (valorBruto*(_desco/100));
        precoComDesconto = precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        valorBruto = valorBruto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} );
        panel.innerHTML = '';
        panel.innerHTML += `<h1>Resultado Do Cupom</h1>`;
        panel.innerHTML += `<p>O produto é ${nomeProduto}, Por ${valorBruto}</p>`;
        panel.innerHTML += `<p>Com o Cupom ${cupom} de ${_desco}%</p>`
        panel.innerHTML += `<p>${nomeProduto} fica apenas por ${precoComDesconto}</p>`

    } else {
        return panel.innerHTML = `O Cupom ${nomeProduto} é invalido, digite outro!!!`
    }

}