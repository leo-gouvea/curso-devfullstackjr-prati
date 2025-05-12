//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require("prompt-sync")();
let nota = parseFloat(prompt("Digite a nota (de 0 a 10): "));
let classificacao = undefined;

if (nota == 0) {
  classificacao = "Reprovado";
  console.log("Classificação: " + classificacao + ".");
} else if (nota >= 1 && nota < 5) {
  classificacao = "Recuperação";
  console.log("Classificação: " + classificacao + ".");
} else if (nota >= 5 && nota <= 10) {
  classificacao = "Aprovado";
  console.log("Classificação: " + classificacao + ".");
} else {
  console.log("Nota inválida.");
}