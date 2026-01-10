import express from 'express'
import { dbConnection } from './src/config/db.config.js';
import dotenv from 'dotenv'
import urlRouter from './src/routes/url.routes.js'
import path from 'path'

const app = express();
const PORT = 8001

dotenv.config()
dbConnection()

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use(express.urlencoded({ extended: false }));


app.use('/url', urlRouter)

app.get('/testing', async (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});