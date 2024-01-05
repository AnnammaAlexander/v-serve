import { Carousel, Typography, IconButton } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";

function Reviews() {
  return (
    <div className=" w-screen py-6 border-t-2">
      <div className="flex items-center justify-center w-3/4 gap-2 font-bold text-blue-gray-500 h-16  m-auto shadow-xl mt-6 bg-deep-purple-50 ">
        5.7
        <Rating value={4} readonly />
        <Typography
          color="blue-gray"
          className="font-medium text-blue-gray-500"
        >
          Based on 134 Reviews
        </Typography>
      </div>
      <Carousel
        className="h-full w-3/4 m-auto mt-4"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
       
       
        <div className="p-4 flex flex-col justify-center w-3/4  m-auto">
          {/* <div className="w-2/4 text-center md:w-2/4"> */}
          <div className="flex mb-3 justify-between items-center ">
            <Typography
              variant="h1"
              color="black"
              className=" text-xl md:text-xl lg:text-xl"
            >
              Annamma Alexander
            </Typography>
            <Rating value={4} readonly />
          </div>
        <p className="text-right text-xs">2 days ago</p>
          <Typography
            variant="lead"
            color="black"
            className="mb-12 opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </Typography>
        </div>


        <div className="p-4 flex flex-col justify-center w-3/4  m-auto">
          {/* <div className="w-2/4 text-center md:w-2/4"> */}
          <div className="flex mb-3 justify-between items-center ">
            <Typography
              variant="h1"
              color="black"
              className=" text-xl md:text-xl lg:text-xl"
            >
              Nimmy
            </Typography>
            <Rating value={4} readonly />
          </div>
          <p className="text-right text-xs">2 days ago</p>

          <Typography
            variant="lead"
            color="black"
            className="mb-12 opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </Typography>
        </div>




        <div className="p-4 flex flex-col justify-center w-3/4  m-auto">
          {/* <div className="w-2/4 text-center md:w-2/4"> */}
          <div className="flex mb-3 justify-between items-center ">
            <Typography
              variant="h1"
              color="black"
              className=" text-xl md:text-xl lg:text-xl"
            >
              Anna Alex
            </Typography>
            <Rating value={4} readonly />
          </div>
          <p className="text-right text-xs">2 days ago</p>

          <Typography
            variant="lead"
            color="black"
            className="mb-12 opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim upon
            men&apos;s hearts, as for that subtle something, that quality of air
            that emanation from old trees, that so wonderfully changes and
            renews a weary spirit.
          </Typography>
        </div>
      </Carousel>
    </div>
  );
}

export default Reviews;
