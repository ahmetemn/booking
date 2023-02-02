import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
mongoose.set('strictQuery', true)
const app =express();
dotenv.config()
 

const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDb Connected Succesful")
    }catch(err){

        console.log("MongoDb didnt connect "); 

        throw error 

    }
}

mongoose.connection.on('connected' , () =>{
    console.log("mongoDb connected :) ");
});

mongoose.connection.on ('disconnected' , () =>{
    console.log("mongoDb disconnected !")
})



app.listen(8800 , ()=>{
    connect()
})

