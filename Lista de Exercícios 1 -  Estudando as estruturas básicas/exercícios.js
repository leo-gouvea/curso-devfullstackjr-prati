const prompt = require("prompt-sync")();

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

let numero = parseInt(prompt("Digite um número inteiro: "));

if (numero % 2 == 0) {
  console.log(numero + " é par.");
} else {
  console.log(numero + " é ímpar.");
}

//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

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

//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

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

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let opcao = parseInt(
  prompt(
    "Em qual período você estuda? \n1 - Manhã \n2 - Tarde \n3 - Noite \nDigite a opção correspondente: "
  )
);
let periodo;

switch (opcao) {
  case 1:
    periodo = "Manhã";
    console.log("Você estuda no período: " + periodo + ".");
    break;
  case 2:
    periodo = "Tarde";
    console.log("Você estuda no período: " + periodo + ".");
    break;
  case 3:
    periodo = "Noite";
    console.log("Você estuda no período: " + periodo + ".");
    break;
  default:
    console.log("Opção inválida.");
    break;
}

//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else

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

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

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

//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let quantidadeMacas = parseInt(prompt("Quantidade de maçãs compradas: "));
let precoPorMaca = undefined;
let valorTotal = undefined;

if (quantidadeMacas < 12) {
  precoPorMaca = 0.3;
  valorTotal = quantidadeMacas * precoPorMaca;
  console.log(
    "Valor total da compra: R$ " + valorTotal.toFixed(2) + "."
  );
} else {
  precoPorMaca = 0.25;
  valorTotal = quantidadeMacas * precoPorMaca;
  console.log(
    "Valor total da compra: R$ " + valorTotal.toFixed(2) + "."
  );
}

//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));

let ordemCrescente = undefined;

if (valor1 < valor2) {
    ordemCrescente = valor1 + ", " + valor2;
  } else {
    ordemCrescente = valor2 + ", " + valor1;
  }
  
console.log("Ordem crescente: " + ordemCrescente);

  //9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

  let contagemRegressiva = 10;
  for (contagemRegressiva; contagemRegressiva >= 1; contagemRegressiva--) {
    console.log('Contagem Regressiva: ' + contagemRegressiva);
  }


  //10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

  let numeroInteiro = parseInt(prompt("Digite um número inteiro: "));

  for (let contador = 1; contador <= 10; contador++) {
    console.log('Número: ' + numeroInteiro + " Repetição: " + contador);
  }

//   11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

let somaTotal = 0;

for (let i = 1; i <= 5; i++) {
  let entradaNumeros = parseInt(prompt("Digite o " + i + "º número: "));
  somaTotal += entradaNumeros;
}

console.log("Soma total: " + somaTotal);

//   12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let numeroTabuada = parseInt(prompt("Digite um número para ver sua tabuada: "));

for (let i = 1; i <= 10; i++) {
  let resultadoTabuada = numeroTabuada * i;
  console.log(numeroTabuada + " x " + i + " = " + resultadoTabuada);
}

//   13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
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

//   14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial: "));
let fatorial = 1;

while (numeroFatorial > 1) {
  fatorial *= numeroFatorial;
  numeroFatorial--;
}

console.log("Fatorial: " + fatorial);

//   15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let fibonacci_a = 0;
let fibonacci_b = 1;

console.log("Sequência de Fibonacci: ")

for (let i = 0; i < 10; i++) {
  console.log(fibonacci_a);
  let proximoFibonacci = fibonacci_a + fibonacci_b;
  fibonacci_a = fibonacci_b;
  fibonacci_b = proximoFibonacci;
}