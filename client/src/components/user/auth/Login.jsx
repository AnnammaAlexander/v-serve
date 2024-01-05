import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Card,
  // Checkbox,
  Button,
} from "@material-tailwind/react";
function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(20, "Must be less than 20 characters")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be less than 20 characters")
        .min(4, "Must be 4 characters or more")
        .required("Required"),
    }),

    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex justify-center w-screen items-center h-screen bg-light-blue-50 ">
      <Card className="w-96 ">
        <form className="m-auto" onSubmit={formik.handleSubmit}>
          <CardHeader
            variant="gradient"
            className="mb-4 grid h-28 place-items-center  bg-gradient-to-br from-purple-700 via-purple-600 to-purple-400 text-white capitalize "
          >
            <Typography
              variant="h2"
              color="white"
              className="font-kaushan"
              style={{
                color: "#ffff",
                // textShadow: "1px 1px black, -1px  1px blue",
                textShadow:
                  " .05rem .04rem .06rem rgba(255, 255, 255, 0.272), -.1rem -.06rem .05rem rgba(9, 8, 8, 0.91)",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              V-Serve
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-2">
            <input
              className="border-[.1rem] border-gray-400 rounded-md p-2 placeholder:text-sm focus:border-blue-600"
              placeholder="User Name/E-mail/Mobile"
              id="userName"
              {...formik.getFieldProps("userName")}
            />
            <p className="h-4 ml-2 text-sm text-red-800">
              {formik.touched.userName && formik.errors.userName
                ? formik.errors.userName
                : null}
            </p>

            <Input
              type="password"
              label="Password"
              size="lg"
              id="password"
              {...formik.getFieldProps("password")}
            />
            <p className="h-4 ml-2 text-sm text-red-800">
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null}
            </p>
            {/* <div className="-ml-2.5"> */}
            {/* <Checkbox label="Remember Me" /> */}
            {/* </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              className="rounded-xl custom-button bg-gradient-to-tl from-purple-700 via-purple-600 to-purple-400 text-white capitalize text-lg"
              type="submit"
              size="sm"
              // color='green'
              // variant="gradient"
              fullWidth
            >
              Sign In
            </Button>

            <div className="flex justify-center items-center gap-3 p-4">
              <div className="w-full border-t-2 border-blue-gray-200 "></div>
              <p className="text-blue-gray-300">OR</p>
              <div className="w-full border-t-2 border-blue-gray-200 "></div>
            </div>

            <div className="flex justify-center">
              <Button
                //   onClick={loginWithGoogle}
                size="lg"
                variant="outlined"
                color="blue"
                className="flex items-center gap-3"
              >
                <img
                  src="https://www.google.com/images/hpp/ic_wahlberg_product_core_48.png8.png"
                  alt="metamask"
                  className="h-6 w-6"
                />
                Sign in WITH GOOGLE
              </Button>
            </div>

            <button className="mt-2">
              Dont have an account ?
              <Link
                to="/signup"
                className="ml-1 text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign up
              </Link>
            </button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;
