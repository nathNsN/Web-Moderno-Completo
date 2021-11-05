for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma){
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['promise, {abordado: false']
])

for(let assunto of assuntoMap){
    console.log(assunto)
}