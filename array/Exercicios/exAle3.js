function despesasTotais(newArray) {
    
    const precos = newArray.map(a => a.preco).reduce(function(acumulador, atual){

        const resultado = acumulador + atual
        console.log(resultado)
    }) 
}


despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]) // retornará 239.99
    despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]) // retornará 34599.89