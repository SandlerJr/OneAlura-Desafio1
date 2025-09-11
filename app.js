// Desafio 1: Verifica o dia da semana
function verificarDiaDaSemana() {
  let dia = prompt("Qual é o dia da semana?");

  if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
    alert("Bom fim de semana!");
  } else {
    alert("Boa semana!");
  }
}