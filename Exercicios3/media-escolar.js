// Exercício Nota Escolar
// Obter a media a partir de um array

// 0-59: F   60-69: D   70-79: C  80-89: D   90-100: A
const array = [100, 80, 80]

var media = (mediaAluno(array))

console.log(media.toFixed(2))

if (media <= 59) {
  console.log('Nota F')
} else if (media <= 69) {
  console.log('Nota D')
} else if (media <= 79) {
  console.log('Nota C')
} else if (media <= 89) {
  console.log('Nota B')
} else {
  console.log('Nota A')
}

function mediaAluno (notas) {
  var soma = 0
  var media
  for(var i = 0; i < notas.length; i++) {
    soma += notas[i]; 
  }

  media = soma / notas.length

  return media
}
