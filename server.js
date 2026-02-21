import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import path from 'path'
import { dbAuthConnection, dbURLConnection } from './src/config/db.config.js';
import { authentication, restrictTo } from './src/middlewares/auth.middleware.js';
import router from './src/routes/user.routes.js';
import staticRoutes from './src/routes/static.routes.js';
import urlRoutes from './src/routes/url.routes.js';
import { URL } from './src/models/url.model.js';

const app = express()
const PORT = 5001
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
dotenv.config();

dbAuthConnection
dbURLConnection



app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use('/user', router)
app.use('/', staticRoutes)

app.use(authentication)

app.use('/url', restrictTo(['user', 'admin']), urlRoutes)

app.get('/', restrictTo(['user', 'admin']), async (req, res) => {

    const entries = await URL.find({ createdBy: req.user._id })
    res.render('home', {
        entries
    })
})

app.get('/admin/urls', restrictTo(['admin']), async (req, res) => {

    const entries = await URL.find({})
    res.render('home', {
        entries
    })
})

app.listen(PORT, () => console.log("Server started"));