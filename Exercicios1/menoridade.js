var idade = 57
console.log(`Você tem ${idade} anos.`)
if (idade >= 16 && idade < 18) {
    console.log('Voto facultativo')
} else if (idade < 16) {
    console.log('Não vota')
} else if (idade < 60) {
    console.log('Vota')
} else {
    console.log('Voto facultativo')
}