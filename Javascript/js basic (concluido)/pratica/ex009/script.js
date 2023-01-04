let n = 0;


function iniciar() {
    let res = document.getElementById('result');
    n++;
    res.innerHTML = (`<p>O contador esta com <mark>${n}</mark> Cliques</p>`);
}

function zerar() {
    let res = document.getElementById('result');
    n =0;
    res.innerHTML = null;
}