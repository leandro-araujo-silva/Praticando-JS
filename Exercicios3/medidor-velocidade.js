function velocidade(valor) {
  var taxa
  if (valor <= 70) {
    console.log("Tudo ok!")
  } else {
    taxa = valor - 70
    ponto = taxa / 5
    pontoArr = Math.floor(ponto)
    if(ponto > 12) {
      console.log(`Multado. Carteira suspendida!`)
    } else {
      console.log(`Multado! O senhor receberá ${pontoArr} pontos na carteira.`)
    }
    
  }
}

velocidade(95)