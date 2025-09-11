// Desafio 1: Verifica o dia da semana
function verificarDiaDaSemana() {
  let dia = prompt("Qual é o dia da semana?");

  if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    alert("Bom fim de semana!");
  } else {
    alert("Boa semana!");
  }
}

// Desafio 2: Verifica se o número é positivo ou negativo
function verificarNumero() {
  let numero = parseFloat(prompt("Digite um número:"));

  if (isNaN(numero)) {
    alert("Isso não é um número válido.");
  } else if (numero >= 0) {
    alert("O número é positivo.");
  } else {
    alert("O número é negativo.");
  }
}