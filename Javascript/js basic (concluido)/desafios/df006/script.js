function converter() {
    let panel = document.getElementById('panel');
    panel.innerHTML = '';
    let celcius = Number(prompt("Digite a temperatura em °C (Celcius)"));
    let kelvin = (celcius + 273.15)// 0 °C + 273,15 = 273,15 K 
    let fah = (celcius*(9/5)) + 32 //(0 °C × 9/5) + 32 = 32 °F
    celcius = celcius.toFixed(1).replace('.',',');
    kelvin = kelvin.toFixed(2).replace('.',',');
    fah = fah.toFixed(2).replace('.',',');
    panel.innerHTML += `<h1>A temperatura de ${celcius}°C, Corresponde a...</h1>`
    panel.innerHTML += `<p>${kelvin}°K (Kelvin)</p>`
    panel.innerHTML += `<p>${fah}°F (Fahrenheit)</p>`
}