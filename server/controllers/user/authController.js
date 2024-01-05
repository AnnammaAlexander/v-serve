import bcrypt from "bcryptjs";
import { isuserExist,
    signup,
    generateToken
 } from "../../helper/user/authHelper.js";
const userAuthController ={
    signup: async (req, res) => {
        try {
          const { firstName,lastName, email, password,conformPassword  } = req.body.values;
          const isEmailExist = await isuserExist(email);
          if (isEmailExist === null) {
            const salt = await bcrypt.genSalt(10);
            console.log('password,salt',conformPassword,salt);
            const hashPassword = await bcrypt.hash(password, salt);
            console.log("hashPassword",hashPassword);
            const response = await signup(firstName,lastName, email, hashPassword);
            if (response) {
              const jwtToken = await generateToken(response._id);
              response.password = "";
              const userData = {
                status: "success",
                message: "Registration Successful",
                user: response,
                token: jwtToken,
              };
            //   console.log("resssssssssssssssssss",userData);
              res.json(userData);
            } else {
              throw new Error("Signup failed.");
            }
          } else {
            // Handle the case where isEmailExist is not null
            res.json({
              status: "error",
              message: "Email already exists",
            });
          }
        } catch (error) {
          console.log("error in contrllers", error);
        }
      },

}
export default userAuthController;