//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
const prompt = require("prompt-sync")();
let ladoA = parseFloat(prompt("Digite o valor do lado A: "));
let ladoB = parseFloat(prompt("Digite o valor do lado B: "));
let ladoC = parseFloat(prompt("Digite o valor do lado C: "));

let condicaoTriangulo = undefined;
let tipoTriangulo = undefined;

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
  condicaoTriangulo = "Os lados formam um triângulo.";
  console.log(condicaoTriangulo);

  if (ladoA == ladoB && ladoB == ladoC) {
    tipoTriangulo = "Equilátero";
    console.log("Tipo de triângulo: " + tipoTriangulo + ".");
  } else {
    if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      tipoTriangulo = "Isósceles";
      console.log("Tipo de triângulo: " + tipoTriangulo + ".");
    } else {
      tipoTriangulo = "Escaleno";
      console.log("Tipo de triângulo: " + tipoTriangulo + ".");
    }
  }
} else {
  console.log("Os lados NÃO formam um triângulo.");
}