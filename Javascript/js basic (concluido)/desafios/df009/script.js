const DadosFuncionarios = [
    {
        Nome: 'Amanda',
        Idade: 23
    }, 
    {
        Nome: 'Alice',
        Idade: 19,
    },
    {
        Nome: 'Fernando',
        Idade: 25,
    },
    {
        Nome: 'Bigas',
        Idade: 21,
    }, 
    {
        Nome: 'Mathias',
        Idade: 28,
    }, 
    {
        Nome: 'Luiz',
        Idade: 31,
    },
    {
        Nome: 'Ana',
        Idade: 28,
    }
]

function VerificarFuncionario(nm, arry) {
    for (let el of arry) {
        const {Nome} = el;
        if(Nome === nm) {
            return true;
        }
    }

    return false;
}

function iniciar(){
    let panel = document.getElementById('panel');
    panel.innerHTML = ''
    let nome = String(document.getElementById('txtNome').value);
    let salAtual = Number(document.getElementById('txtSalAtual').value);
    let meta = Number(document.getElementById('txtMeta').value);
    let bonus = 0;
    if (VerificarFuncionario(nome, DadosFuncionarios)) {
        
        if(meta>=30 && meta<=39) {
            bonus = 3;
        } else if(meta>=40 && meta <50) {
            bonus = 6;
        } else if(meta>=50 && meta<60) {
            bonus = 12;
        } else if(meta>60) {
            bonus = 20;
        }
    } else  {
        return panel.innerHTML = `Esse Funcionario nao pertence a empresa `
    }
    let novoSalario = salAtual + (salAtual*(bonus/100))
    novoSalario = novoSalario.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    salAtual = salAtual.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    panel.innerHTML += `<p>Funcionario ${nome}, fez ${meta}Hrs Semanais</p>`
    panel.innerHTML += `<p>Salario atual é de ${salAtual} e ganho um bonus de ${bonus}%</p>`
    panel.innerHTML += `<p>Seu novo salario é de ${novoSalario}</p>`
    
}