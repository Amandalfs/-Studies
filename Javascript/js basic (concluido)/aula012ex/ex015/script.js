function Verificar() {
    var res = window.document.getElementById('res')
    var nasc = window.document.getElementById('nasc')
    var data = new Date()
    var atual = data.getFullYear()
    if (nasc.value > atual || nasc.value.length  == 0) {
        res.innerHTML = (`[Dados Invalidos] Verifique os Dados e Tente Novamente `)
    } else {
        var genero = ''
        var idade = atual - Number(nasc.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var fsex = document.getElementsByName('radsex')
        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "menino.png")
                genero = 'Menino'
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem.png')
                genero = 'Jovem' 
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
                genero = 'Homem'
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.png')
                genero = 'Idoso'
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menina.png');
                genero = 'Menina'
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'mulher-jovem.png');
                genero = 'Jovem'
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'mulher-adulta.png')
                genero = 'Mulher' 
            } else {
                // idoso
                img.setAttribute('src', 'mulher-idosa.png')
                genero = 'Idosa'
            }        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
        
    }
}