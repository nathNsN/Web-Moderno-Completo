// não aceita repetição/não indexada
const times = new Set()
times.add('Paraná')
times.add('São Paulo').add('Corinthians').add('Palmeiras')
times.add('Varmengo')
times.add('Paraná')

console.log(times)
console.log(times.size)
