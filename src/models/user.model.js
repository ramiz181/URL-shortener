import mongoose from 'mongoose'
import { dbAuthConnection } from '../config/db.config.js'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
}, { timestamps: true })

export const AuthUser = dbAuthConnection.model('AuthUser', userSchema)

// export { User }