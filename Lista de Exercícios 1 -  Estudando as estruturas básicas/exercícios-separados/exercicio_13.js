//   13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require("prompt-sync")();
let numeroDecimal = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));
let somaNumerosDecimais = 0;
let contadorNumerosDecimais = 0;

while (numeroDecimal !== 0) {
  somaNumerosDecimais += numeroDecimal;
  contadorNumerosDecimais++;
  numeroDecimal = parseFloat(prompt("Digite um número decimal (ou 0 para sair): "));
}

if (contadorNumerosDecimais > 0) {
    let mediaAritmetica = somaNumerosDecimais / contadorNumerosDecimais;
    console.log("Média aritmética: " + mediaAritmetica);
  }