import express from 'express'
import { handleUserLogin, handleUserSignup } from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/signup', handleUserSignup)
router.post('/login', handleUserLogin)

export default router