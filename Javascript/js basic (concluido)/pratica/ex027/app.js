function iniciar(){
    let panel = document.getElementById('panel');
    let num = document.getElementById('txtNumber');
    num = Number(num.value);
    panel.innerHTML = '';
    panel.innerHTML += `<h2>Tabuada de ${num}</h2>`
    for (let c = 1; c<=10; c++) {
        let result = num * c;
        panel.innerHTML += `${num} X ${c} = <strong>${result}</strong> <br>`;
    }
}