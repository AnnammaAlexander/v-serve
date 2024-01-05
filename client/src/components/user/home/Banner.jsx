import "./banner.css";
import { Typography, Button } from "@material-tailwind/react";
import Select from "react-select";
import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { setCountry } from "../../../redux/slice/countrySlice";


function Banner() {
  const dispatch=useDispatch()
  const defaultCountry = useSelector((store) => store.country.citizenship);
  const options = useMemo(() => countryList().getData(), []);
  const [fromCountry, setFromCountry] = useState(defaultCountry);
  const [toCountry, setToCountry] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const changeHandler = (value) => {
    setFromCountry(value);
  };

  const getRequirement = () => {
    if (toCountry.label) {
      dispatch(setCountry(fromCountry))
      navigate(`/visareq/${fromCountry.label}/${toCountry.label}`);
    } else {
      setIsError(true);
    }
  };


  return (
    <div className="h-screen w-screen bannerimg flex flex-col-reverse gap-3 md:flex-row px-5 md:px-20  md:pt-28 shadow-sm justify-center  lg:justify-center  ">
      
      <div className="md:w-2/5">
        <div className="shadow-2xl p-5 rounded-lg">
          <Typography color="black" className="mb-2 font-medium">
            For citizens of
          </Typography>

          <Select
            options={options}
            defaultValue={fromCountry}
            onChange={changeHandler}
          />

          <Typography
            color="black"
            className="mb-2 font-medium mt-6 sm:text-base xm:text-base"
          >
            Traveling to
          </Typography>

          <Select
            options={options}
            value={toCountry}
            onChange={(value) => {
              setToCountry(value);
            }}
          />
          {isError && <p className="text-red-900">Enter destination</p>}
          <div className=" flex ">
            <Button
              onClick={getRequirement}
              size="lg"
              className="m-auto mt-10 rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 text-white capitalize"
            >
              Check Requirements
            </Button>
          </div>

          {/* <Button className="mt-10" fullWidth>
            Apply
          </Button> */}
        </div>
      </div>

      <div className="md:w-3/5 h-40 md:flex md:flex-col justify-end md:items-center -mt-10 lg:mt-7">
        {/* <Typography variant="h2" color="white">
          Travel Visa Requirements
        </Typography> */}
         <Typography variant="h2" color="white" className=" text-center"
         style={{    color: 'white',            textShadow:" .05rem .04rem .06rem rgba(255, 255, 255, 0.272), -.1rem -.06rem .05rem rgba(9, 8, 8, 0.91)",
        }}
            //  style={{ color: 'purple', textShadow: '1px 2-7410px royalblue', fontSize: '32px', fontWeight: 'bold' }}
            >
             Travel Visa Requirements
            </Typography>
        <Typography
          variant="h4"
          color="white"
          className=" font-medium mt-5 md:mt-10 p-2 "
          style={{textShadow:'1px 1px black'}}
        >
          Explore your destination and conveniently apply for visas worldwide
          using our online services.
        </Typography>
      </div>
    </div>
  );
}

export default Banner;
