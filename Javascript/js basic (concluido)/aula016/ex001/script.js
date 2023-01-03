const array = []
let num = document.getElementById('txtNum');
let panel = document.getElementById('painel');
let res = document.getElementById('res')

function Finaliza() {
    if (array.length === 0) {
        alert(`Nao tem nem um item na lista`)
    } else{
        res.innerHTML = '';
        let total =+ array.length
        let maior = array[0]
        let menor = array[0]
        let soma = 0
        let media = 0   
        for (const el of array) {
            soma += el
            if (el>maior) {maior = el}
            if (el<menor) {menor = el}
        }
        media = soma/total
        res.innerHTML += (`<p>Ao todo, temos ${total} numeros cadastrados. </p>`);
        res.innerHTML += (`<p>O maior valor informado foi ${maior}.</p>`);
        res.innerHTML += (`<p>O menor valor informado foi ${menor}.</p>`);
        res.innerHTML += (`<p>Somando os valores, temos ${soma}.</p>`);
        res.innerHTML += (`<p>A média dos valores digitados é ${media}.</p>`);
        console.log(array)
    }
    
}

function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${num.value} Foi Adicionado`
        panel.appendChild(item)
    } else {
        alert(`Valor ja encontrado na lista ou invalido`)
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}