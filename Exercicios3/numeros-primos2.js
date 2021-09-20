exibirPrimos(5)

function exibirPrimos(limite) {
  for (let number = 2; number <= limite; number++) {

    if(ehprimo(number)) console.log(number)
  }
}

function ehprimo(n) {
  for (let divisor = 2; divisor < number; divisor++) {
    if(number % divisor === 0) {
      return false;
    }
  }
  return true;
}