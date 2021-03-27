/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

function simboloMais(num) {
    
    newArray = []

    for(i = 1; i <= num; i++){
        newArray.push('+')
    }
    return console.log('"'+ newArray.concat([])+'"')
}

simboloMais(2)