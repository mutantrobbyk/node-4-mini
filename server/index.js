require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const ctrl = require('./messagesCtrl')

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

app.get('/api/messages', ctrl.getAllMessages)
app.post('/api/message', ctrl.createMessage)
app.get('/api/messages/history', ctrl.history)

app.listen(SERVER_PORT, () => console.log(`Hello ${SERVER_PORT}`))