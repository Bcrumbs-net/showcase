import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
  Button,
} from "../../../../atoms";
import SectionWrapper from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface TrialSectionProps {
  row: object;
  title: object;
  description: object;
  textArea: object;
  imageArea: object;
  ImageOne: object;
  btnStyle: object;
  outlineBtnStyle: object;
  buttonWrapper: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TrialSection = ({
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
  model,
  isAR,
  data,
}: TrialSectionProps) => {
  return (
    <SectionWrapper className={model.name}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={data.image} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading {...title} content={data.title} />
            <Text {...description} content={data.subtitle} />
            <Box {...buttonWrapper}>
              <Button title={data.trial_option_1_label} {...btnStyle} />
              <Button
                title={data.trial_option_2_label}
                variant="textButton"
                {...outlineBtnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

TrialSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
  },
  textArea: {
    width: ["100%", "100%", "80%", "43%"],
  },
  imageArea: {
    width: ["100%", "100%", "43%"],
    mb: ["35px", "35px", "40px", "40px"],
  },
  title: {
    fontSize: ["28px", "32px", "36px", "42px", "48px"],
    fontWeight: "500",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: "28px",
    textAlign: "center",
    lineHeight: "1.25",
  },
  description: {
    fontSize: ["15px", "15px", "16px", "16px", "16px"],
    color: "#5c636c",
    lineHeight: "2.1",
    textAlign: "center",
    mb: ["35px", "35px", "40px", "60px"],
  },
  ImageOne: {
    ml: "auto",
    mr: "auto",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
  },
  btnStyle: {
    minWidth: "156px",
    fontSize: ["13px", "14px"],
    fontWeight: "500",
    colors: "secondaryWithBg",
    pl: ["15px", "30px"],
    pr: ["15px", "30px"],
  },
  outlineBtnStyle: {
    minWidth: "156px",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    colors: "secondary",
  },
};

export default withModelToDataObjProp(TrialSection);
