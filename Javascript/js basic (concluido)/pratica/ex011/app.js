function Media() {
    let res = document.getElementById('result');
    let nome = prompt("Qual o nome do(a) Aluno(a)?");
    let nota1 = Number(prompt(`Qual foi a primeira de ${nome}`));
    let nota2 = Number(prompt(`Alem de ${nota1}, qual foi outra nota de ${nome}`));
    let media = (nota1+nota2)/2
    let msg = ''
    if(media>=7) {
        msg = "Meus parabens"
    }else {
        msg = "ficou de Recuperacao"
    }
    res.innerHTML = `<p>Calculando a media final de <mark>${nome}</mark></p>`;
    res.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e  <mark>${nota2}</mark></p>`
    res.innerHTML += `<p>A media final foi <mark>${media}</mark></p>`
    res.innerHTML += `<p>A mensagem que temos e: <strong style="color: red;">${msg}</strong></p>`
}