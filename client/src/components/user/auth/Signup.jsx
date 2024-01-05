import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  // Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";
import { register } from "../../../API/user/apiAuthConnection";
import { setId, setToken } from "../../../redux/slice/userSlice";
function Signup() {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      conformPassword: "",
      termsAndConditions: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),

      lastName: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      password: Yup.string()
        .max(20, "Must be less than 20 characters")
        .min(4, "Must be 4 characters or more")
        .required("Required"),

      conformPassword: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Password not match")
        .required("Required"),

        termsAndConditions: Yup.boolean()
        .required("You must accept the Terms of Service to proceed")
        .oneOf([true], "You must accept the Terms of Service to proceed"),
    }),
    onSubmit: async (values) => {
      
      const response=await register(values)
            // console.log("..................", response);
            if(response.status==="success"){
              if(response.token){
                dispatch(setToken(response?.token))
                dispatch(setId(response?.user?._id))
                navigate('/')
              }
            
      }
    },
  });
  return (
    <div className="h-screen w-screen flex justify-center ite bg-light-blue-50">
      <div className="shadow-2xl w-fit p-5 bg-white h-fit m-auto rounded-lg">
        <Typography
          variant="h2"
          color="white"
          className="font-kaushan text-center"
          style={{
            color: "purple",
            textShadow: "1px 1px royalblue",
            fontSize: "32px",
            fontWeight: "bold",
          }}
        >
          Sign up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to register.
        </Typography>
        <div className="flex justify-center rounded ">
          <form
            onSubmit={formik.handleSubmit}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
          >
            <div className="mb-4 flex flex-col gap-0.5">
              <input
                className="border-[.1rem] border-gray-400 rounded-md p-2 placeholder:text-sm focus:border-blue-600"
                placeholder="firstName"
                id="firstName"
                {...formik.getFieldProps("firstName")}
              />
              <p className="h-4 ml-2 text-sm text-red-800">
                {formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.firstName
                  : null}
              </p>

              <input
                className="border-[.1rem] border-gray-400 rounded-md p-2 placeholder:text-sm focus:border-blue-600"
                placeholder="lastName"
                id="lastName"
                {...formik.getFieldProps("lastName")}
              />
              <p className="h-4 ml-2 text-sm text-red-800">
                {formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : null}
              </p>

              {/* <input className='border-[.1rem] border-gray-400 rounded-md p-2 placeholder:text-sm focus:border-blue-600' placeholder='User Name/E-mail/Mobile' id="userName"
              {...formik.getFieldProps('userName')} />
              <p className="h-4 ml-2 text-sm text-red-800">{formik.touched.userName && formik.errors.userName ? 
              formik.errors.userName : null}</p> */}

              <input
                className="border-[.1rem] border-gray-400 rounded-md p-2 placeholder:text-sm focus:border-blue-600"
                placeholder="email"
                id="email"
                {...formik.getFieldProps("email")}
              />
              <p className="h-4 ml-2 text-sm text-red-800">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : null}
              </p>

              <Input
                type="password"
                label="password"
                size="lg"
                id="password"
                {...formik.getFieldProps("password")}
              />
              <p className="h-4 ml-2 text-sm text-red-800">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : null}
              </p>

              <Input
                type="password"
                label="conform Password"
                size="lg"
                id="conformPassword"
                {...formik.getFieldProps("conformPassword")}
              />
              <p className="h-4 ml-2 text-sm text-red-800">
                {formik.touched.conformPassword && formik.errors.conformPassword
                  ? formik.errors.conformPassword
                  : null}
              </p>
            </div>
            <div className="flex flex-col items-center">
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              {...formik.getFieldProps("termsAndConditions")}
            />
             <p className="h-4 ml-2 mb-2 text-sm text-red-800">
                {formik.touched.termsAndConditions && formik.errors.termsAndConditions
                  ? formik.errors.termsAndConditions
                  : null}
              </p>
              </div>
          
            <Button
              type="submit"
              className=" rounded-xl custom-button   bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 text-white capitalize shadow-lg text-lg"
              fullWidth
                    size="sm"
            >
              Signup
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 transition-colors hover:text-blue-70.010"
              >
                {" "}
                Sign In{" "}
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
