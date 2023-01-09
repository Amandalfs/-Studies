function iniciar(){
    let panel = document.getElementById('panel');
    let numA = Number(document.getElementById('numA').value);
    let numB = Number(document.getElementById('numB').value);
    let numC = Number(document.getElementById('numC').value);
    // ax2 + bx + c = 0 /  delta = b2 - 4.a.c
    let delta = (numB*numB) - ((4*numA)*numC);
    console.log(delta)
    panel.innerHTML = '';
    panel.innerHTML = `<p>A equacao atual é <strong>${numA}x<sup>2</sup> + ${numB}x + ${numA} = 0</strong></p>`;
    panel.innerHTML += `<p>O calculo realizado sera <strong>&Delta; = ${numB}<sup>2</sup> - 4 . ${numA} . ${numC}</strong> </p>`;
    panel.innerHTML += `<p>O valor calculado foi <mark><strong>&Delta; =  ${delta}</strong></mark></p>` 
}