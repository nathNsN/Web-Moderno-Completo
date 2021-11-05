function maiorOuIgual(n1, n2) {
    var resultado, num1 = n1, num2 = n2

    if((num1 > num2) || (num1 === num2)) {
        resultado = true
    } else {
        resultado = false
    }
    return console.log(resultado)
}

maiorOuIgual(0,0)
maiorOuIgual(0,"0")
maiorOuIgual(5,1)
