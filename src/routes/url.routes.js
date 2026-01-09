import express from 'express'
import { handleGenerateURL, handleRedirectURL } from '../controllers/url.controllers.js'

const router = express.Router()

router.post(('/'), handleGenerateURL)
router.get('/:shortID', handleRedirectURL)


export default router