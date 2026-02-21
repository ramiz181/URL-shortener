import { AuthUser } from "../models/user.model.js"
import { generateToken } from "../services/auth.service.js"

export const handleUserSignup = async (req, res) => {
    const { name, email, password } = req.body

    await AuthUser.create({
        name,
        email,
        password
    })
    return res.redirect('/')
}
export const handleUserLogin = async (req, res) => {

    const { email, password } = req.body
    const user = await AuthUser.findOne({ email, password })
    // if (!user) return res.redirect('/login', {
    //     error: "Invalid email or password"
    // })

    if (!user) {
        return res.redirect('/login?error=Invalid%20email%20or%20password');
    }
    const token = generateToken(user)
    res.cookie('token', token)
    // return res.json({ token })
    return res.redirect('/')
}