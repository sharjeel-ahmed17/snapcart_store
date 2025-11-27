import { IUser } from "@/types/types";
import mongoose from "mongoose";


const UserSchema= new mongoose.Schema<IUser>({
    name: {
        type : String
    }, 
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : false,
    },
    mobile : {
        type : String , 
        // required : true
    } , 
    role : {
        type : String,
        enum : ["user" , "deliveryBoy" , "admin"],
        default : "user"
    },
    image : {
        type : String
    }
}, {timestamps : true})


const User = mongoose.models.User || mongoose.model("User" , UserSchema)
export default User