import mongoose from "mongoose";

export const dbConnection = async () => {
    await mongoose.connect(process.env.mongoDB_URL)
        .then((e) => {
            console.log(`Connected to mongoDB atlas: ${e.connection.port}, ${e.connection.name}`);
        })
        .catch(err => {
            console.log(err);
        })
}