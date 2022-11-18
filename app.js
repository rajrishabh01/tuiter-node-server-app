import express from 'express'

const app = express()

app.get('/hello', (req,res) => {res.send('Hello 123 World')})

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development')})
app.listen(4000)