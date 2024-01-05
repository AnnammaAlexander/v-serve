import axios from 'axios'
import { Base_URL } from './baseUrl';
   


const baseURL = axios.create({
    baseURL : Base_URL
})

export default baseURL;