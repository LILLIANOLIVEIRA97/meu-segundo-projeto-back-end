const express = require ("express")
const router = express.Router()

const app = express()
const porta = 3333
     

const mulheres = [
    {

        nome: 'Lillian Oliveira',
        minibio: 'Estudante'

    },

    {
    nome:'Luciene Pereira',
    minibio: 'Mãe'
    
    },

    {
        nome:'Lara Nobrega',
        minibio: 'Amiga'
        
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres)

}
function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
