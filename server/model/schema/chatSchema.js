import {Schema,model} from "mongoose";
const chatSchema = new Schema(
    {
        members:{
            type:Array,
            required:true,
        
        }
    },
    {
        timestamps:true
    }
)
const Chat = model("chat",chatSchema)
export default Chat;