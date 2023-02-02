import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
mongoose.set('strictQuery', true)
const app = express();
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (err) {
        throw error

    }
}

mongoose.connection.on('connected', () => {
    console.log("mongoDb connected :) ");
});

mongoose.connection.on('disconnected', () => {
    console.log("mongoDb disconnected !")
})



app.listen(8800, () => {
    connect()
})

