import baseURL from "../axios";

export const getVisaData = async(from,to)=>{
    try {
        console.log("...........................");
        const response = await baseURL.get(`/getvisadata/${from}/${to}`)
        return response.data
    } catch (error) {
        throw new Error('failed.')
  
    }

}