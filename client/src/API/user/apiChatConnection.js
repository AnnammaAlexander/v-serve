import baseURL from "../axios";

export const sendMessage = async (currentMessages,user)=>{
  try {
    const response =await baseURL.post('/sendmsg',{currentMessages,user})
    console.log("response");
    return response.data
  } catch (error) {
    throw new Error('failed.')
  }

}