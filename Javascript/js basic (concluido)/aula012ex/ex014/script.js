function carregar(){
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var min = data.getMinutes();
    var hora = data.getHours();
    msg.innerHTML=(`Agora são ${hora}:${min}`);
    if (hora >= 0 && hora <12) {
        //Bom Dia
        img.src = "manha.png"
        document.body.style.background = '#ffe29c';
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde
        img.src = "tarde.png"
        document.body.style.background = '#7c441f';
    } else {
        //Boa Noite
        img.src = "noite.png"
        document.body.style.background = '#99698f'
    }
}
