const express = require('express')
const log = require('./middleware/logger')
const app = express()
const router = require('./router')

app.use(log)
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(router)
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: 'failed',
        message: 'Page ' + req.originalUrl + ' Not Found'
    })
}) 

app.listen(3001, () => console.log('Server: http://localhost:3001'))