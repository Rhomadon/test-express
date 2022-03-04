const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const router = require('./routers')
const logger = require('./middlewares/logger')
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(logger)
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('Server: http://localhost:'+port))