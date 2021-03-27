const nums = [1, 2, 3, 4, 5]

// Map é um for com propósito 
// O Map gera um NOVO array

let resultado = nums.map(function(e){ 
    return e * 2 //Aqui ele está retornando o valor da posição x 2
})

console.log(resultado) // [2, 4, 6, 8, 10]


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// O que acontece aqui?
// Eu pego o array nums e atribuo + 10 ao valor nas posições do Array
// Após isso, ele pega essa soma e com o .map(triplo) ele irá triplicar esse valor
// E por ultimo, ele converte esse valor Inteiro em real e o passa para dinheiro
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
