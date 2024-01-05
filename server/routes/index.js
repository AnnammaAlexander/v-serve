import express from 'express';
import visaController from '../controllers/user/visaController.js';
import userAuthController from '../controllers/user/authController.js';
const router = express.Router()

//auth router
router.post('/api/signup',userAuthController.signup)
//visa router
router.get('/api/getvisadata/:from/:to',visaController.getData)


export default router