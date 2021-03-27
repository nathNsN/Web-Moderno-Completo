const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/2 * 23 * * 5', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log
})