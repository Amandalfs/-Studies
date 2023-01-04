function Calcular() {
    let res = document.getElementById("res");
    let n = Number(prompt("Digite um numeo: "));
    res.innerHTML = ``;
    let abso = Math.abs(n);
    let inte = Math.trunc(n);
    let prox = Math.round(n);
    let rqua = Math.sqrt(n);
    let rcubi = Math.cbrt(n);
    let vez = n*n;
    let vez2 = n*n*n;
    res.innerHTML = ``;
    res.innerHTML += (`<p>O numero a ser analisado aqui sera o <strong>${n}</strong> </p>`);
    res.innerHTML += (`<hr/>`);
    res.innerHTML += (`<p>O valor absoluto e ${abso}</p>`);
    res.innerHTML += (`<p>A sua parte inteira e ${inte}</p>`);
    res.innerHTML += (`<p>O valor inteiro mais proximo e ${prox}</p>`);
    res.innerHTML += (`<p>A sua raiz quadrada e ${rqua}`);
    res.innerHTML += (`<p>A sua raiz cubica e ${rcubi}</p>`);
    res.innerHTML += (`<p>O valor de ${n}<sup>2</sup> e ${vez} </p>`);
    res.innerHTML += (`<p>O valor de ${n}<sup>2</sup> e ${vez2}</P>`);
    


}   