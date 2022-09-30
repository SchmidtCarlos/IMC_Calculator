//  Exercicio para treinar o uso de Switch..Case e if..else

//  Calculadora de IMC: Índice de massa corporal

// Dados para o cálculo do IMC

let peso = 90; // dado em kg
let altura = 1.83; // dado em metros

let imc = peso / (altura * altura);

let classificacao = "";
let grau = 0;

// Abaixo irá dar a classificação e o grau para o IMC calculado

if (imc < 18.5) {
  classificacao = "Magreza";
  grau = 0;
} else if (imc < 25) {
  classificacao = "Normal";
  grau = 0;
} else if (imc < 30) {
  classificacao = "Sobrepeso";
  grau = 1;
} else if (imc < 40) {
  classificacao = "Obesidade";
  grau = 2;
} else {
  classificacao = "Obesidade grave";
  grau = 3;
}
console.log("O seu IMC é: " + imc.toFixed(2));
console.log(
  "Seu IMC está classificado como: " + classificacao + " e o seu grau é " + grau
);

// Abaixo é exibida uma mensagem de acordo com o grau de IMC

switch (grau) {
  case 0:
    console.log("Seu peso está bom"); 
    break;
  case 1:
    console.log("Cuidado! Você está acima do peso recomendado pela OMS");
    break;
  case 2:
    console.log("Cuidado! Você está acima do peso recomendado pela OMS");
    break;
  default:
    console.log("É importante procurar um médico para avaliar a sua saúde.");
}
