/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
*/

function repetir(valor, qtde) {
    const newArray = []
    for (i = 0; i < qtde; i++) {
        newArray.push(valor)
    }
    return console.log(newArray)
}

repetir("Codigo", 2)
repetir(7, 3)

