import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        require: true,
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
    }]
}, { timestamps: true }
);


export const URL = mongoose.model('URL', urlSchema)