import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { useState, useMemo } from "react";
import { useParams,  } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Applyform() {
  const options = useMemo(() => countryList().getData(), []);

  const params = useParams();

  const defaultCountry = params.fromCountry;

  const [fromCountry, setFromCountry] = useState({
    label: defaultCountry,
    value: defaultCountry,
  });
  const changeHandler = (value) => {
    setFromCountry(value);
  };
  return (
    <div className="bg-blue-gray-300 w-80">
      <h1 className="text-xl text-center">Application form</h1>

      <div className="shadow-lg mt-10 ml-5 p-4">
        <Card color="transparent" shadow={true} className="w-96 bg-purple-100">
          {/* <Typography variant="h4" color="blue-gray">
        
      </Typography> */}
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <Typography
            color="blue-gray"
            variant="h6"
            className="mt-4 font-normal"
          >
            Already have an account?{" "}
            <Button className="font-medium text-white">Sign In</Button>
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <div className="flex gap-2 ">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  First Name
                </Typography>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm font-light">
                    Type name as shown in passport.
                  </p>
                </div>
              </div>

              <Input
                size="lg"
                placeholder="first name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {/* <Typography
        variant="small"
        color="gray"
        className="mt-2 flex items-center gap-1 font-normal"
      > */}

              {/* </Typography> */}

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Middle Name
              </Typography>

              <Input
                size="lg"
                placeholder="first name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Last Name
              </Typography>

              <Input
                size="lg"
                placeholder="first name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <div className="flex gap-10">
                <Radio name="type" label="Male" ripple={true} />
                <Radio name="type" label="Female" ripple={false} />
              </div>

              <Typography color="black" className="font-medium">
                For citizens of
              </Typography>

              <Select
                options={options}
                defaultValue={fromCountry}
                onChange={changeHandler}
              />

              <div className="date-picker-container  ">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                >
                  Date of Birth
                </Typography>
                <DatePicker
                  // selected={selectedDate}
                  // onChange={onChange}
                  showYearDropdown
                  dateFormat="yyyy/MM/dd"
                  placeholderText="Select Date of Birth"
                  maxDate={new Date()} // Restrict future dates
                  className="custom-date-picker "
                />
              </div>

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
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
            />
            <Button className="mt-6" fullWidth>
              Save and continue
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Applyform;
