// operador ... rest(juntar) / spread (espalhar)
// usar rest com parametro da função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1234.90}
const clone = {ativo: true, ...funcionario}

console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Nathan']


console.log(grupoFinal)