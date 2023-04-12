/* valor_do_desconto = valor_total - meu_dinheiro;
valor_do_desconto = 110 - 50; */

const valorTenis: number = 110;
const seuDinheiro: number = 50;
const desconto: number = (seuDinheiro*100)/valorTenis
console.log(desconto.toFixed(1))