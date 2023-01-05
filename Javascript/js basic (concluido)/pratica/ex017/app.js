let res = document.getElementById('res');

function gerar() {
    let random = Math.floor(Math.random() * 100 + 1);
    console.log(random);
    res.innerHTML += (`<p>Foi gerador o numero <mark>${random}</mark></p>`);
}

function limpar() {
    res.innerHTML = "";
}