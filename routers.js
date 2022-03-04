const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home.ejs')
})

router.get('/crews', (req, res) => {
    res.render('crews.ejs')
})

router.get('/*', (req, res) => {
    res.status(404).send('404, Page ini tidak ditemukan!')
    
})

module.exports = router