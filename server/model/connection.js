import mongoose from "mongoose";
 import { configkeys } from "../config/configKey.js";
const connectDB =async()=>{
    try {
        
        await mongoose.connect(configkeys.MONGO_URL).then(()=>{
            console.log('database connected succesfully')
        })
    } catch(error)  {
        console.log(`database connection Error : ${error}`);
        process.exit(1)
    }
}
export default connectDB; 