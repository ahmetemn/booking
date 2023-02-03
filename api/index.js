import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
//if you are use import  in express you must write .js !!!!!
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotel.js";
import roomRoute from "./routes/room.js";
import cookieParser from "cookie-parser";
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
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth' , authRoute)
app.use('/api/hotels' , hotelRoute)
app.use('/api/rooms' , roomRoute)
app.use('/api/users' , usersRoute)
app.use((err,req,res,next)=>{

        const errorStatus = err.status ||500
        const errorMessage = err.message ||"Something went wrong"


        return res.status(errorStatus).json({
            success:false,
            status:errorStatus,
            message:errorMessage,
            stack:err.stack,
        })
})


app.listen(8800, () => {
    connect()
})

