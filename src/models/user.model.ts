import mongoose from "mongoose";
import { deflate } from "zlib";


interface IUser{
    _id? : mongoose.Types.ObjectId
    name : string
    email : string
    password : string
    mobile? : string
    role : "user" | "deliveryBoy" | "admin"
}
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
        required : true,
    },
    mobile : {
        type : String , 
        // required : true
    } , 
    role : {
        type : String,
        enum : ["user" , "deliveryBoy" , "admin"],
        default : "user"
    }
}, {timestamps : true})


const User = mongoose.models.User || mongoose.model("User" , UserSchema)
export default User