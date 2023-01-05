function iniciar() {
    let resultado
    let panel = document.getElementById('result');
    let numero1 = Number(prompt("Digite um numero"));
    let numero2 = Number(prompt('agora digite o segundo numero'));
    let escolha = Number(prompt(`
        Valores Informados ${numero1} e ${numero2}
        O que vamos fazer ?
        [1] Somar
        [2] Subtrair
        [3] Multiplicar
        [4] Dividir
    `))
    switch(escolha) {
        case 0:
            panel.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${numero1} e ${numero2}, mas não sei o que fazer com eles.</p>`
            break
        case 1:
            resultado = numero1 + numero2;
            panel.innerHTML = `<p>${numero1} + ${numero2} = <strong>${resultado}</strong></p>`
            break
        case 2:
            resultado = numero1 - numero2 
            panel.innerHTML = `<p>${numero1} - ${numero2} = <strong>${resultado}</strong></p>`    
            break
        case 3:
            resultado = numero1  * numero2
            panel.innerHTML = `<p>${numero1} * ${numero2} = <strong>${resultado}</strong></p>`
            break
        case 4:
            resultado = numero1 / numero2
            panel.innerHTML = `<p>${numero1} / ${numero2} = <strong>${resultado}</strong></p>`
            break
    }
}