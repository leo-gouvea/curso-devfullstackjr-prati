const prompt = require('prompt-sync')();

let idade = parseInt(prompt("Digite a sua idade: "));
let faixaEtaria = undefined;

if (idade >= 0 && idade <= 12) {
  faixaEtaria = "criança";
  console.log("Você pertence ao grupo: " + faixaEtaria + ".");
} else {
  if (idade >= 13 && idade <= 17) {
    faixaEtaria = "adolescente";
    console.log("Você pertence ao grupo: " + faixaEtaria + ".");
  } else {
    if (idade >= 18 && idade <= 59) {
      faixaEtaria = "adulto";
      console.log("Você pertence ao grupo: " + faixaEtaria + ".");
    } else {
      if (idade >= 60) {
        faixaEtaria = "idoso";
        console.log("Você pertence ao grupo: " + faixaEtaria + ".");
      } else {
        console.log("Idade inválida.");
      }
    }
  }
}