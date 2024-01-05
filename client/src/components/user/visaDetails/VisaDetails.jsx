// import { useState } from "react";
import { useState, useMemo, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import Select from "react-select";
import { useParams, useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import { useDispatch } from "react-redux";
import { setCountry } from "../../../redux/slice/countrySlice";
import { getVisaData } from "../../../API/user/apiVisaConnection";
import { toast } from "react-toastify";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// import { BookmarkIcon, FilmIcon, PhotoIcon } from "@heroicons/react/24/outline";

export const HeadPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const defaultCountry = params.fromCountry;
  const destination = params.toCountry;

  const visaType = [
    { value: "Tourist E-visa", label: "Tourist E-visa" },
    { value: "Business E-visa", label: "Business E-visa" },
    { value: "Health Declaration E-form", label: "Health Declaration E-form" },
  ];

  const [visaRequirments, setVisaRequirments] = useState({});
  const [fromCountry, setFromCountry] = useState({
    label: defaultCountry,
    value: defaultCountry,
  });

  const [toCountry, setToCountry] = useState({
    label: destination,
    value: destination,
  });
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setToCountry(value);
    console.log("fromCountry.label....",fromCountry.label);
    console.log("value.label..",value.label);
    navigate(`/visareq/${fromCountry.label}/${value.label}`);

  };
  const changeCitizenship = (value) => {
    setFromCountry(value);
    navigate(`/visareq/${value.label}/${toCountry.label}`);

  };

  const handleVisaApply = () => {
    dispatch(setCountry(fromCountry));
    // console.log("fffffffffffff",fromCountry);
    navigate(`/applyform/${fromCountry.label}`);
  };
  const from = countryList().getValue(defaultCountry);
  const to = countryList().getValue(destination);

  const dataFetch = async () => {
    const response = await getVisaData(from, to);
    console.log("ress...........", response);
    if (!response?.error.status) {
      setVisaRequirments(response);
    } else {
      toast.error("Invalid");
    }

    //   const response = await fetch(`https://rough-sun-2523.fly.dev/api/${from}/${to}`)

    //   if (!response.ok) {
    //     // If the response status is not in the range 200-299, consider it an error
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }

    //   const data = await response.json();
    //   console.log("response......", data);
    // } catch (error) {
    //   console.error("Error fetching data:", error.message);
    // }
  };

  useEffect(() => {
    dataFetch();
  }, [toCountry,fromCountry]);

  console.log("visaRequirments........", visaRequirments);
  // const desti = countryList().getValue(visaRequirments.destination)
  // console.log(",,,,,,,,,,,,,,,,,,,,,",desti);
  const [activeTab, setActiveTab] = useState("Tourist E-visa"); // Default to 'Tourist E-visa'


  const handleTabChange = async (tab) => {
    setActiveTab(tab);
    if (tab === "Tourist E-visa") {
      // const savedImages = await getSavedItems()
      // console.log("saveedImages,,,,,,,,,,,,,,,:",savedImages);
      //  setSavedImg(savedImages)
    } else if (tab === "Business E-visa") {
      // console.log("hhhhhhhhhhhhh",userDetails?.userName);
      // const user=userDetails?.userName
      // const follwList =await getFollowers(user)
      // console.log("kkkkkk",follwList);
      // setFollowers/Data(follwList)
    } else if (tab === "Health Declaration E-form") {
      // const user=userDetails?.userName
      // const res = await getAbout(user)
      // console.log("aboutDetails",aboutDetails);
      // srtAboutDetails(res);
    }
  };
  return (
    <>
      <div className="relative mt-[4rem] lg:mt-[5rem]">
        <p className="absolute text-white  font-bold text-4xl  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 top-20 lg:mt-10 text-center w-full">
         {destination} visa for {defaultCountry} passport holder
        </p>
        <img
          className="w-screen h-60 object-cover"
          src="https://www.global-opportunities.net/wp-content/uploads/2019/09/Visa-Services-768x240.jpg"
        />
        <div className="absolute opacity-90 top-0 left-0 w-screen h-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-24 bg-white shadow-xl rounded-md p-2 lg:-translate-y-1/2 ">
          <div className="p-2 flex flex-col gap-3 lg:flex-row">
            <div className=" gap-1 items-center ">
              <Typography variant="h6" color="black" className="font-normal ">
                Destination
              </Typography>
              <Select
                className="basic-single w-100"
                classNamePrefix="select"
                defaultValue={toCountry}
                onChange={changeHandler}
                name="color"
                options={options}
              />
            </div>

            <div className=" gap-2 items-center w-100">
              <Typography variant="h6" color="black" className="font-normal">
                Citizenship
              </Typography>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={fromCountry}
                name="color"
                options={options}
                onChange={changeCitizenship}
              />
            </div>
            <div className="w-72 flex flex-col">
              <label>Select Visa Type:</label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={visaType[0]}
                name="color"
                options={visaType}
              />
            </div>

            <div className="m-auto mt-2">
              <Button
              size="lg"
              className="m-auto mt-3 rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 text-white capitalize "
              color="green" onClick={handleVisaApply}>Apply</Button>
            </div>
          </div>
          <div />
        </div>
      </div>

      <div className="  lg:w-2/3   lg:mt-20 m-auto mt-60">
        {/* <p>ffffffffffffffffffffffffff</p> */}
        <Tabs value={activeTab}>
          <TabsHeader className="h-24 lg:h-16 ">
            <Tab value="Tourist E-visa">
              <div
                className="flex items-center gap-5"
                onClick={() => handleTabChange("Tourist E-visa")}
              >
                {/* <PhotoIcon className="w-5 h-5" /> */}
                Tourist E-visa
              </div>
            </Tab>
            <Tab value="Business E-visa">
              <div
                className="flex items-center gap-2"
                onClick={() => handleTabChange("Business E-visa")}
              >
                {/* <FilmIcon className="w-5 h-5" /> */}
                Business E-visa
              </div>
            </Tab>
            <Tab value="Health Declaration E-form">
              <div
                className="flex items-center gap-2"
                onClick={() => handleTabChange("Health Declaration E-form")}
              >
                {/* <BookmarkIcon className="w-5 h-5" /> */}
                Health Declaration E-form
              </div>
            </Tab>
          </TabsHeader>
          {/* <TabsBody className="grid grid-cols-3 grid-rows-auto m-1 gap-1"> */}
          <TabsBody
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))",
              gridGap: "5px",
              gridAutoFlow: "dense",
            }}
          ></TabsBody>
          <TabsBody
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px,1fr))",
              gridGap: "5px",
              gridAutoFlow: "dense",
            }}
          >
            <TabPanel value="Health Declaration E-form">
              <div>
                <p>Health Declaration E-form</p>
              </div>
            </TabPanel>
          </TabsBody>

          <TabsBody>
            <TabPanel value="Tourist E-visa">
              <div>
                <div className="">
                  <p className="font-bold">NOTE: </p>

                  <p>
                    E-visa is not available to Diplomatic/Official Passport or
                    Laissez-passer travel document holders as well as
                    International Travel Document Holders.
                  </p>
                  <p className="text-red-900 mt-3">
                    All foreign nationals intending to visit India for
                    individual tourism purposes will be permitted to enter India
                    on e-Tourist Visa with effect from 15 November, 2021.
                  </p>

                  <p className="font-bold mt-3">
                    India E-visas must be obtained prior to travel to India. No
                    documents need to be mailed to VisaHQ for processing.
                  </p>
                  <p className="mt-3">
                    You will receive an Electronic Travel Authority by e-mail.
                    Biometric details will be taken upon arrival in India.
                  </p>
                  <p className=" mt-3 text-black">
                    If you have a valid visa in your old passport, this visa is
                    still valid for entry. You have to bring your old passport
                    along with your new passport and earlier granted valid
                    e-Visa (ETA) document with you. Please do not apply if you
                    have a valid visa in any other passport. Your application
                    will be rejected. If your passport with Indian visa was
                    lost, and you are applying with a new passport, please let
                    us know
                  </p>
                  <h1 className="mt-4 font-semibold text-center text-2xl">
                    Fill out India tourist e-visa application form online
                  </h1>
                  <div className="flex justify-center mt-4 ">
                    <Button size="lg"
                      className="m-auto rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 text-white "
                    >
                      Get Started
                    </Button>
                  </div>
                  <h1 className="mt-4 font-semibold text-center text-2xl ">
                    and provide digital copies of the following documents:
                  </h1>

                  <div className="flex mt-5">
                    <p className="text-2xl mr-3">1 </p>
                    <div>
                      <p className="text-black">
                        {" "}
                        Scanned copy of United Arab Emirates passport.
                      </p>
                      <p>
                        A clear scan of the information pages of your valid,
                        signed passport. The passport must also have 2 remaining
                        blank pages upon arrival in India.
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3">
                    <p className="text-2xl mr-3 ">2 </p>
                    <div>
                      <p className="text-black"> Passport-type photograph:</p>
                      <p> must be uploaded to your applicant profile.</p>
                    </div>
                  </div>
                </div>

                <div className=" mt-10 border-3 border-black p-6">
                  <p className="text-left text-black">IMPORTANT</p>
                  <p className="text-sm mt-10">Applicants who:</p>
                  <p className="mt-3 text-black">• have been arrested/ prosecuted/ convicted by Court of Law of any country; </p>
                  <p className="mt-3 text-black">• have been refused entry / deported by any country including India;</p>
                  <p className="mt-3 text-black">• have been engaged in human trafficking/ drug trafficking/ child abuse/ crime against women/ Economic offense / Financial fraud;</p>
                  <p className="mt-3 text-black">• have ever been engaged in cyber crime/ terrorist activities/ sabotage/ espionage/ genocide/ political killing/ other act of violence;</p>
                  <p className="mt-3 text-black">• have by any means or medium, expressed views that justify or glorify terrorist violence or that may encourage others to terrorist acts or other serious criminal acts;</p>
                  <p className="mt-3 text-black">• have sought asylum (political or otherwise)in any country</p>
                  <p className="font-bold mt-5">Are ineligible for e-Visa and must instead apply for a visa at the nearest Indian Consulate. Please contact VisaHQ for more information.</p>
                </div>

                <div className="flex justify-center">
                  <Button 
                  className="m-auto rounded-xl bg-gradient-to-r from-purple-800 via-purple-600 to-purple-300 text-white "

                  size="lg">GET Started</Button>
                </div>


              </div>
            </TabPanel>
          </TabsBody>

          <TabsBody>
            <TabPanel value="Followers">
              {/* <div className="flex flex-wrap gap-7 mt-5 ">
                {followersData.map((followListData)=>(
                 <Followers
                 key={followListData._id}
                 followListData={followListData}
                 user={user}
                 />
                ))}
              </div> */}
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </>
  );
};
