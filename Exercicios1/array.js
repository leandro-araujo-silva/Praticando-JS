let num = [5, 3, 5]
let soma = 0

num.push(8)
num[4] = 5

num.sort()

for (var i = 0; i < num.length; i++) {
    console.log(num[i])
    soma += num[i]
}

console.log('Finalizado!')
console.log(`A soma dos valores é ${soma}`)
console.log(`O vetor tem ${num.length} posições.`)
