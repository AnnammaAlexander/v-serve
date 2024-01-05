import mongoose from "mongoose";
import User from "../../model/schema/userSchema.js";
import { configkeys } from "../../config/configKey.js";
import jwt from "jsonwebtoken";

//check the user is exist or not
export const isuserExist = async (email) => {
  try {
    const response = await User.findOne({ email: email });
    console.log("response",response );
    return response;
  } catch (error) {
    console.log("error in helpers", error);
  }
};
//signup user
export const signup = async (firstName,lastName, email, password) => {
    try {
      const user = {
        firstName,lastName, email, password
      };
      const newUser = new User(user);
      return await newUser.save();
    } catch (error) {
      console.log(error);
    }
  };
  
//Generates a JWT token for the provided user ID
export const generateToken = async (userId) => {
    try {
      // Check if the JWT token key is defined in your configuration
      if (configkeys?.jwtTokenKey) {
        // Sign the token with the user ID and the JWT token key
        const token = jwt.sign({ userId }, configkeys.jwtTokenKey, {
          expiresIn: "5d", // Token expiration time (5 days in this example)
        });
  
        // Return the generated token
  
        return token;
      } else {
        // Throw an error if the JWT_TOKEN_KEY is not defined
        throw new Error("JWT_TOKEN_KEY is undefined");
      }
    } catch (error) {
      // Handle any errors that occur during token generation
      console.error("Error generating token:", error);
      throw error;
    }
  };
  