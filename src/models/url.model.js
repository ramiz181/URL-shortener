import mongoose from "mongoose";
import { dbURLConnection } from "../config/db.config.js";

const urlSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitorHistory: [{
        // equivalent to ==> timestamp: Number
        timestamp: {
            type: String
        }
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'AuthUser'
    }
}, { timestamps: true }
);

export const URL = dbURLConnection.model('URL', urlSchema)