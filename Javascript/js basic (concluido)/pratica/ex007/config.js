function clicou() {
    let res = document.getElementById('res');
    let nome = prompt("Qual é o nome do aluno ?");
    let nota1 = Number(prompt(`Qual foi a primero nota de ${nome}`));
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}`));
    res.innerHTML = (`<p>Calculando a média final de <mark>${nome}</mark> </p>
    <p>as notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark> </p>
    <p>A média final será <mark>${(nota1+nota2)/2}</mark></p>
    `);
    
}