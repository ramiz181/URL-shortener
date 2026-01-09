import express from 'express'
import { handleGenerateURL, handleGetAnalytics, handleRedirectURL } from '../controllers/url.controllers.js'

const router = express.Router()

router.post(('/'), handleGenerateURL)
router.get('/:shortID', handleRedirectURL)
router.get('/analytics/:shortID', handleGetAnalytics)


export default router