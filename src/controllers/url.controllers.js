import { nanoid } from "nanoid"
import { URL } from "../models/url.model.js"

export const handleGenerateURL = async (req, res) => {

    const { redirectURL } = req.body

    if (!redirectURL) res.status(400).json({ error: 'URL is required' })

    const shortID = nanoid(8)

    await URL.create({
        shortURL: shortID,
        redirectURL,
    })
    res.status(200).json({ status: 'success', message: 'short URL created' })
}

export const handleRedirectURL = async (req, res) => {

    const shortURL = req.params.shortID

    const entry = await URL.findOneAndUpdate({ shortURL }, {
        $push: {
            visitorHistory: {
                timestamp: new Date().toLocaleString()
            }
        }
    })

    console.log(entry);

    res.redirect(entry.redirectURL)

    // res.send("Hello")
}