//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
const prompt = require("prompt-sync")();
let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

let ordemCrescente = undefined;

if (valor1 < valor2) {
    ordemCrescente = valor1 + ", " + valor2;
  } else {
    ordemCrescente = valor2 + ", " + valor1;
  }
  
console.log("Ordem crescente: " + ordemCrescente);