import express from 'express'


const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {

    if (req.query.error) {
        console.log((req.query.error))
    }
    res.render('login')
})

export default router