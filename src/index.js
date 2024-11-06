const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log('entrou aqui!')
    res.send('Olá Mundo!')
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})