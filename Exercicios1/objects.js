var leandro = {
  nome: 'Leandro',
  vitorias: 3,
  empate: 4,
  derrotas: 5,
  pontos: 0
}

var maycon = {
  nome: 'Maycon',
  vitorias: 4,
  empate: 4,
  derrotas: 3,
  pontos: 0
}

calculaPontos(leandro)
calculaPontos(maycon)

function calculaPontos(jogador) {
  var pontos = 0;

  pontos = jogador.vitorias * 3 + jogador.empate * 1;

  console.log(pontos);
}
