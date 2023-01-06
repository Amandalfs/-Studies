function calcular(){
    let panel = document.getElementById('panel');
    panel.innerHTML = '';
    let metros = Number(prompt("Digite uma distancia em metros (m)"));
    let = km =  metros/1000;
    let hect = metros/100;
    let deca = metros/10;
    let deci = metros*10;
    let centi = metros*100;
    let mili = metros*1000;
    mili = mili.toFixed(0)
    centi = centi.toFixed(0)
    deci = deci.toFixed(1).replace('.', ',');
    deca = deca.toFixed(3).replace('.', ',');
    hect = hect.toFixed(3).replace('.', ',');
    km = km.toFixed(3).replace('.',',');
    metros = metros.toFixed(2).replace('.', ',');
    panel.innerHTML += `<h1>A distancia de ${metros} metros, correponde a...</h1>`
    panel.innerHTML += `<p>${km} quilometros (Km)</p>`
    panel.innerHTML += `<p>${hect} hectometros (Hm)</p>`
    panel.innerHTML += `<p>${deca} decametros (Dam)</p>`
    panel.innerHTML += `<p>${deci} decimetros (dm)</p>`
    panel.innerHTML += `<p>${centi} centimetros (cm)</p>`
    panel.innerHTML += `<p>${mili} milimetros (mm)</p>`

}