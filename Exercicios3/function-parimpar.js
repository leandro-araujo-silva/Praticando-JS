function parimpar (limite) {
  for (var i = 0; i <= limite; i++) {
    if (i % 2 == 0) {
      console.log(`Valor ${i} é PAR`)
    } else {
      console.log(`Valor ${i} é ÍMPAR`) 
    }
  }
}

parimpar(9)
