import express from 'express'
import { dbConnection } from './config/db.config.js';
import dotenv from 'dotenv'
const app = express();
const PORT = 5000

dotenv.config()
dbConnection()

// Middlewares
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.send("done")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});