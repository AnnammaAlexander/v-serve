import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import img1 from "../../../assets/Placeholder-amico.svg";
import img2 from "../../../assets/Sent Message-rafiki.svg";
import img3 from "../../../assets/gettyimages-1201064704-612x612.jpg";
export function TimelineWithAvatar() {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-3xl m-10 ">How Visa Service Works ?</h4>
      <div className="p-4">
        <Timeline>
          <div className="bg-purple-50 rounded-xl  p-2 ">
            <TimelineItem className="">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0 ">
                  <Avatar
                    size="xxl"
                    src={img1}
                    alt="user 1"
                    withBorder
                    className="bg-white"
                  />
                </TimelineIcon>

                <div>
                  <Typography variant="h5" color="blue-gray" className="mt-10">
                    Apply online
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal text-gray-600 "
                  >
                    Secure online application saves time and checks for errors
                  </Typography>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8 ">
                {/* <Typography color="gray" className="font-normal text-gray-600 ">
              Secure online application saves time and checks for errors
              </Typography> */}
              </TimelineBody>
            </TimelineItem>
          </div>

          <div className="bg-purple-50 rounded-xl p-2 mt-3">
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar
                    size="xxl"
                    src={img2}
                    alt="user 2"
                    className="bg-white"
                    withBorder
                  />
                </TimelineIcon>
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Mail documents
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    No need to stand in line at the consulate, we will do it for
                    you.
                  </Typography>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8"></TimelineBody>
            </TimelineItem>
          </div>

          <div className="bg-purple-50 rounded-xl mt-3 p-2">
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-0 bg-white">
                  <Avatar
                    size="xxl"
                    src={img3}
                    alt="user 3"
                    withBorder
                    className="bg-white"
                  />
                </TimelineIcon>
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Receive visa
                  </Typography>
                  <Typography
                    color="gray"
                    className="font-normal text-gray-600"
                  >
                    Real time status updates will keep you informed.
                  </Typography>
                </div>
              </TimelineHeader>
              <TimelineBody className="pb-8"></TimelineBody>
            </TimelineItem>
          </div>
        </Timeline>
      </div>
    </div>
  );
}
