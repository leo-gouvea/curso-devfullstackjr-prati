 //9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
 const prompt = require("prompt-sync")();
 let contagemRegressiva = 10;
 for (contagemRegressiva; contagemRegressiva >= 1; contagemRegressiva--) {
   console.log('Contagem Regressiva: ' + contagemRegressiva);
 }


 //10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

 let numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

 for (let contador = 1; contador <= 10; contador++) {
   console.log('Número: ' + numeroInteiro + " Repetição: " + contador);
 }