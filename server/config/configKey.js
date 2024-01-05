import dotenv from 'dotenv';
dotenv.config()
export const configkeys = {
    MONGO_URL:process.env.MONGODB_URL ,
    PORT:process.env.PORT ,
    jwtTokenKey:process.env.JWT_TOKEN_KEY
}