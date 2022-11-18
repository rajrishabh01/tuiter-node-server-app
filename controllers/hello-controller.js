import express from 'express'

const HelloController = (app) => {

    app.get('/hello', (req, res) => { 
        res.send('Hello 123 World') 
    })

    app.get('/', (req, res) => {
         res.send('Welcome to Full Stack Development') 
        })
}

export default HelloController;


