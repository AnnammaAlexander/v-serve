import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  //   CardFooter,
  //   Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function BackgroundBlogCard() {
  const defaultcountry = useSelector((store) => store.country.citizenship);
  return (
    <>
      <div className=" h-20 shadow-xl  p-10 text-center font-bold text-3xl bg-purple-50">
        {" "}
        Expolre the world
      </div>

      <div className="flex overflow-x-scroll no-scrollbar gap-4  bg-purple-50 ">
        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                className="object-cover h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                color="deep-purple"
                className="mb-2 cursor-pointer"
                as={Link}
                to={`/visareq/${defaultcountry.label}/Russian Federation`}
              >
                Russian Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="https://media.istockphoto.com/id/970600792/photo/shanghai-stock-market.jpg?s=612x612&w=0&k=20&c=X1nmx6BwYvhY00NyWCYm4peX2t4MP_emzMDcbZGHrp4="
                alt="card-image"
                className="object-cover h-full w-100"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="deep-purple" className="mb-2">
                Chaina Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>

        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="https://imageio.forbes.com/i-forbesimg/media/lists/places/singapore_416x416.jpg?format=jpg&height=416&width=416&fit=bounds"
                alt="card-image"
                className="object-cover h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="deep-purple" className="mb-2">
                Singapore Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>

        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="data:image/jpeg;base64,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"
                alt="card-image"
                className="object-cover h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="deep-purple" className="mb-2">
                Russian Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card-image"
                className="object-cover h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="deep-purple" className="mb-2">
                Russian Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>
        <div className="">
          <Card className="mb-10 mt-6 w-96 rounded-none overflow-hidden">
            <CardHeader
              color="blue-gray"
              className="relative h-80 mt-2 rounded-none"
            >
              <img
                src="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="card-image"
                className="object-cover h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="deep-purple" className="mb-2">
                Russian Visa
              </Typography>
              <div className="flex gap-2">
                <Typography>From</Typography>
                <Typography variant="h6" color="deep-purple" className="mb-2">
                  500 AED
                </Typography>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="https://www.istockphoto.com/photo/city-embankment-at-night-with-illumination-gm493283252-76822537"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <p className="text-xs">4 bussiness Days</p>
              </div>
            </CardBody>
            {/* <CardFooter className="pt-0 flex gap-2 items-center">
            
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </>
  );
}
