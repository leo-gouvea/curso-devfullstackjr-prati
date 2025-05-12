//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const prompt = require("prompt-sync")();
let quantidadeMacas = parseInt(prompt("Quantidade de maçãs compradas: "));
let precoPorMaca = undefined;
let valorTotal = undefined;

if (quantidadeMacas < 12) {
  precoPorMaca = 0.3;
  valorTotal = quantidadeMacas * precoPorMaca;
  console.log(
    "Valor total da compra: R$ " + valorTotal.toFixed(2) + "."
  );
} else {
  precoPorMaca = 0.25;
  valorTotal = quantidadeMacas * precoPorMaca;
  console.log(
    "Valor total da compra: R$ " + valorTotal.toFixed(2) + "."
  );
}