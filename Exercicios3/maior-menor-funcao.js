function maior(n1, n2) {
  var maior = n1;

  if(n2 > maior) {
    maior = n2;
  }

  return maior;
}

var n1 = 5;
var n2 = 8;

var maior = maior(n1, n2)
console.log(maior)