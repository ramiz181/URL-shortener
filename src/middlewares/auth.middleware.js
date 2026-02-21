import { verifyToken } from "../services/auth.service.js"

export const authentication = (req, res, next) => {

    try {

        const token = req.cookies?.token

        if (!token) return res.redirect('/login?error=Invalid%request')

        const user = verifyToken(token)
        if (!user) return res.redirect('/login?error=UnAuthentic%User')
        req.user = user
        next()

    } catch (error) {
        console.log("middleware error", error);
    }
}

export const restrictTo = (roles = []) => {

    return function (req, res, next) {
        if (!req.user) return res.redirect('/login?error=UnAuthentic%User')
        if (!roles.includes(req.user.role)) return res.end("UnAuthorized User")
        next()
    }
}