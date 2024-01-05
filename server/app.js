import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
// import {v2 as cloudinary} from 'cloudinary';
import connectDB from './model/connection.js';

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cloudinary config
// cloudinary.config({
//     cloud_name : 'wellconnect'  ,
//     api_key : '138536567916474',
//     api_secret :'jiUmsc3jRdUECBSXAM-QOdjmeE8'
// })
connectDB()
app.use(router)
const port =3000
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})
export default app;
