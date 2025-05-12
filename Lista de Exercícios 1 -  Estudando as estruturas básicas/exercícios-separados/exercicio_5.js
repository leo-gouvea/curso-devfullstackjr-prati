//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else
const prompt = require("prompt-sync")();
let peso = parseFloat(prompt("Digite o seu peso (em kg): "));
let altura = parseFloat(prompt("Digite a sua altura (em metros): "));
let imc = undefined;

if (peso > 0 && altura > 0) {
  imc = peso / (altura * altura);
  let classificacao_imc = undefined;

  if (imc < 18.5) {
    classificacao_imc = "Baixo peso";
    console.log(
      "Seu IMC é: " +
        imc.toFixed(2) +
        ". Classificação: " +
        classificacao_imc +
        "."
    );
  } else {
    if (imc >= 18.5 && imc <= 24.9) {
      classificacao_imc = "Peso normal";
      console.log(
        "Seu IMC é: " +
          imc.toFixed(2) +
          ". Classificação: " +
          classificacao_imc +
          "."
      );
    } else {
      if (imc >= 25 && imc <= 29.9) {
        classificacao_imc = "Sobrepeso";
        console.log(
          "Seu IMC é: " +
            imc.toFixed(2) +
            ". Classificação: " +
            classificacao_imc +
            "."
        );
      } else {
        if (imc >= 30) {
          classificacao_imc = "Obesidade";
          console.log(
            "Seu IMC é: " +
              imc.toFixed(2) +
              ". Classificação: " +
              classificacao_imc +
              "."
          );
        }
      }
    }
  }
} else {
  console.log("Peso ou altura inválidos.");
}