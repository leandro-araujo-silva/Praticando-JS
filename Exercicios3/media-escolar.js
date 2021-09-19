// Exercício Nota Escolar
// Obter a media a partir de um array

// 0-59: F   60-69: D   70-79: C  80-89: D   90-100: A
const array = [70, 70, 80]

console.log(mediaAluno(array))

function mediaAluno (notas) {
  var soma = 0
  for(var i = 0; i < notas.length; i++) {
    soma += notas[i]; 
  }

  return soma
}
