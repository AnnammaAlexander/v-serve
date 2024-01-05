import {Schema ,model} from "mongoose";
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
        required :true,
        
    },
    phoneNumber:{
        type:Number,
        default:""
    },
    password:{
        type:String,
        
    },
    gender:{
        type:String,
        default:"",
    },

})
const User =model("user",userSchema)
export default User;