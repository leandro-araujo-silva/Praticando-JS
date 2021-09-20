// Criar função para mostrar os números primos

exibirPrimos(5)

function exibirPrimos(limite) {
  for (let number = 2; number <= limite; number++) {
    let ehprimo = true;

    for (let divisor = 2; divisor < number; divisor++) {
      if(number % divisor == 0) {
        ehprimo = false;
        break;
      }
    }

    if(ehprimo) console.log(number)
  }
}