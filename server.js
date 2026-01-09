import express from 'express'
import { dbConnection } from './src/config/db.config.js';
import dotenv from 'dotenv'
import urlRouter from './src/routes/url.routes.js'

const app = express();
const PORT = 5000

dotenv.config()
dbConnection()
app.use(express.urlencoded({ extended: false }));


app.use('/url', urlRouter)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});