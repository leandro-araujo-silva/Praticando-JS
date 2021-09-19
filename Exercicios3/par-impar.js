function parimp(n) {
  if (n % 2 == 0) {
    return 'Par'
  } else {
    return 'Ímpar'
  }
}

var number = parimp(5)
console.log(number)