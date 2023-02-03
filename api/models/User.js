import mongoose from "mongoose";

const {Schema} = mongoose;

const UsersSchema= new Schema({

    username:{
        type:String, 
        required:true, 
        unique:true,
        maxLength:[50 , '`{PATH}` maxLength 50 character'],
        minLength:[5 , '`{PATH} ` minLength 5 character']
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
        minLength:[8 , '`{PATH}` minLength 8 character']
    },
     isAdmin:{
        type:Boolean,
        default:false
     }
} , {timestamps:true})


export default mongoose.model("User" , UsersSchema);