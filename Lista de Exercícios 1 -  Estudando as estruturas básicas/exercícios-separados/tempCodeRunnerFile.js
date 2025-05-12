const prompt = require("prompt-sync")();
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