//   12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require("prompt-sync")();
let numeroTabuada = parseInt(prompt("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 10; i++) {
  let resultadoTabuada = numeroTabuada * i;
  console.log(numeroTabuada + " x " + i + " = " + resultadoTabuada);
}