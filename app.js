// Desafio 1: Verifica o dia da semana
function verificarDiaDaSemana() {
  const diasValidos = [ "segunda-feira", "terca-feira",
    "quarta-feira", "quinta-feira", "sexta-feira",
    "sabado", "domingo"
  ];

  let dia = prompt("Qual é o dia da semana?");
  if (!dia) {
    alert("Nenhum valor foi digitado.");
    return;
  }

  dia = entrada.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if(diasValidos.includes(dia)) {
    if ( dia === "sabado" || dia === "domingo") {
    alert("Bom fim de semana!");
    } else {
    alert("Boa semana!");
    }
  }  else {
    alert("Dia inválido, tente novamente.")
  }
}

// Desafio 2: Verifica se o número é positivo ou negativo
function verificarNumero() {
  let numero = parseFloat(prompt("Digite um número:"));

  if (isNaN(numero)) {
    alert("Isso não é uma entrada válida.");
  } else if (numero >= 0) {
    alert("O número é positivo.");
  } else {
    alert("O número é negativo.");
  }
}

// Desafio 3: Sistema de pontuação
function verificarPontuacao() {
  let pontuacao = parseInt(prompt("Digite sua pontuação:"));

  if (isNaN(pontuacao)) {
    alert("Pontuação inválida.");
  } else if (pontuacao >= 100) {
    alert("Parabéns, você venceu!");
  } else {
    alert("Tente novamente para ganhar.");
  }
}

// Desafio 4: Mensagem com saldo usando template string
function mostrarSaldo() {
  let saldo = parseFloat(prompt("Digite o valor do saldo:"));

  if (isNaN(saldo)) {
    alert("Valor inválido.");
  } else {
    alert(`Seu saldo atual é de R$ ${saldo.toFixed(2)}.`);
  }
}

// Desafio 5: Boas-vindas com nome do usuário
function boasVindas() {
  let nome = prompt("Digite seu nome:");

  if (nome && nome.trim() !== "") {
    alert(`Bem-vindo, ${nome.trim()}!`);
  } else {
    alert("Nome inválido.");
  }
}