import mongoose from "mongoose"

export interface IUser{
    _id? : mongoose.Types.ObjectId
    name : string
    email : string
    password? : string
    mobile? : string
    role : "user" | "deliveryBoy" | "admin",
    image? : string
}