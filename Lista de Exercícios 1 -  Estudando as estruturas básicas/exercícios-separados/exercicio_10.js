 //10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 const prompt = require("prompt-sync")();
 let numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

 for (let contador = 1; contador <= 10; contador++) {
   console.log('Número: ' + numeroInteiro + " Repetição: " + contador);
 }