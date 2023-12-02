import React from "react";
import Link from "next/link";
import Countdown from "react-countdown-now";
import Fade from "react-reveal/Fade";
import {
  Image,
  Text,
  Box,
  Container,
  Heading,
  Button,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { ControlWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

const Completionist = () => (
  <span className="readMore">You are good to go!</span>
);
interface rendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}
const renderer = ({ days, hours, minutes, seconds, completed }:rendererProps) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="countPortion">
        <div className="countSingle">
          {days} <span className="countText">Days</span>
        </div>
        <div className="countSingle">
          {hours} <span className="countText">Hours</span>
        </div>
        <div className="countSingle">
          {minutes} <span className="countText">Minutes</span>
        </div>
        <div className="countSingle">
          {seconds} <span className="countText">Seconds</span>
        </div>
      </div>
    );
  }
};
interface ContactFromWrapperProps {
  row: object;
  col: object;
  title: object;
  description: object;
  btnStyle: object;
  sectionSubTitle: object;
  cardArea: object;
  readMoreTitle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ControlSection = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  readMoreTitle,
  model,
  isAR,
  data,
}: ContactFromWrapperProps) => {
  return (
    <ControlWrapper id="control">
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Image
              src={data.image}
              className="controlImage"
              alt="Control Section Image"
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Text {...sectionSubTitle} content={data.title} />
            <FeatureBlock
              title={<Heading {...title} content={data.header} />}
              description={<Text {...description} content={data.desc} />}
            />
            <Box className="readMoreSection">
              <Text {...readMoreTitle} />
              <Link href="#">
                <a className="readMore">{data.header_2_url_label} </a>
              </Link>
            </Box>
            <Fade up>
              <Box className="countDownSection">
                <Countdown
                  date={Date.now() + 909999999}
                  renderer={renderer}
                />
              </Box>
            </Fade>
            <Box className="countDownButton">
              <Button
                title={data.button_label}
                className="countDownMainButton"
                {...btnStyle}
              />
              <Button
                title="35% Bonus"
                className="countDownDiscountButton"
                {...btnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </ControlWrapper>
  );
};


// Transactions default style
ControlSection.defaultProps = {
  // Transactions section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Transactions section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },

  // Transactions section title default style
  title: {
    content: "Take control of your credit and identity.",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"],
  },
  // Transactions section description default style
  description: {
    content:
      "Crumbs makes crypto investing effortless and automated, so now you would not miss the right time to buy. From the customer wallet to the marchent wallet in a few minute.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["30px", "30px", "35px", "35px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"],
  },
  sectionSubTitle: {
    content: "Effortless crypto for everyone.",
    as: "span",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["left", "left"],
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  readMoreTitle: {
    content: "Sale currently on hold. ",
    as: "span",
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["25px", "27px", "27px", "27px", "27px"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
};

export default withModelToDataObjProp(ControlSection);
