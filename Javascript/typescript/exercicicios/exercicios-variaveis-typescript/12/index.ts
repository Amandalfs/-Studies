const montante:number = 90000;
const capital:number = 60000;
const meses:number = 24;

const taxa:number = (((montante/capital)**(1/meses))-1)*100
console.log(taxa.toFixed(3))