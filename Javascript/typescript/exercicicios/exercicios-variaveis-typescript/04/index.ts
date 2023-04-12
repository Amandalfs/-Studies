const capital:number = 1000;
const periodo:number = 5;
const taxa:number = 0.125;
const montante:number = capital*((1+taxa)**periodo)
console.log(montante.toFixed(0));