import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
//if you are use import  in express you must write .js !!!!!
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/room.js";
mongoose.set('strictQuery', true)
const app = express();
dotenv.config()


///MongoDb Connection 
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
//// 


///MİDDLEWARE 

app.use('/api/auth' , authRoute)
app.use('/api/hotel' , hotelRoute)
app.use('/api/room' , roomRoute)
app.use('/api/users' , usersRoute)

app.listen(8800, () => {
    connect()
})

