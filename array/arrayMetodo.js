const pilotos = ['Vettel', 'Alonso', 'Ricciardo', 'Massa' ]

pilotos.pop() //Remove o ultimo elemento do Array!
console.log(pilotos);

pilotos.push('Verstappen') //Adiciona um novo elemento!
console.log(pilotos)

pilotos.shift() //Remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona um novo elemento no inicioi!
console.log(pilotos)

//Splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Russell') //Será adicionado 2 elementos e removerá 0.
console.log(pilotos)

//Remover splice
pilotos.splice(3, 1)
console.log(pilotos) // 

const algunsPilotos = pilotos.slice(2) //Gera um novo Array a partir do indice indicado.
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)