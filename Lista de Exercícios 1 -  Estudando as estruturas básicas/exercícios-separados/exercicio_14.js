//   14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require("prompt-sync")();

let numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

while (numeroFatorial > 1) {
  fatorial *= numeroFatorial;
  numeroFatorial--;
}

console.log("Fatorial: " + fatorial);