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
    for (let i = 0; i< arr.length; i++) {
        const {nCupom} = arr[i];
        if (nCupom === cup) {
            return true;
        }
    }
    
    return false;
    
}

function verificarValorCupom(cup, arr) {
    for (let)
}


function iniciar(){
    let panel = document.getElementById('panel');
    let nomeProduto = document.getElementById('lblNome');
    nomeProduto = String(nomeProduto.value);
    let valorBruto = Number((document.getElementById('lblValor')).value);
    let cupom = document.getElementById('lblCupom');
    cupom = String(cupom.value);
    if (verificarFalseOrTrue(cupom, bancoDeDadosCupom)) {
        return console.log('OK, funcinou')
    } else {
        return panel.innerHTML = `O Cupom ${nomeProduto} é invalido, digite outro!!!`
    }

}