//   11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
const prompt = require("prompt-sync")();
let somaTotal = 0;

for (let i = 1; i <= 5; i++) {
  let entradaNumeros = parseInt(prompt("Digite o " + i + "º número: "));
  somaTotal += entradaNumeros;
}

console.log("Soma total: " + somaTotal);