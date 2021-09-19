// Criar função soma que retorna a
// soma de todos os multíplos de 3 e 5

// Multíplos de 3:  3, 6, 9
// Multíplos de 5:  5, 10
// Somando:  3+5+6+9+10 = 33

somar(10)

function somar(limite) {
  var soma = 0
  for (var i = 0; i <= limite; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i;
    }
  }

  console.log(`A soma dos elementos múltiplos de 3 ou 5 = ${soma}`) 
}