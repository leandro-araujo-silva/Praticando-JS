function fizzbuzz(n1) {
  if (typeof n1 !== 'number') {
    return "Não é um número"
  } else if(n1 % 3 == 0 && n1 % 5 == 0) {
    return "Fizzbuzz"
  } else if (n1 % 5 == 0) {
    return "Buzz"
  } else if (n1 % 3 == 0) {
    return "Fizz"
  } else {
    return "Vazio"
  }
}

let resposta = fizzbuzz(15)
console.log(resposta)
