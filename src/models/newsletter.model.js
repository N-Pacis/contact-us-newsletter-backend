import { Schema, model } from "mongoose"

const newsLetter = new Schema({
    email:{
        type:String,
        required:true,
        unique: true
    }
})


export const NewsLetter = model('newsletter',newsLetter)
