import React from "react";
import {
  Box,
  Text,
  Heading,
  Container,
  Input,
  Button,
} from "../../../../atoms";
import NewsletterWrapper, { ContactFormWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface NewsletterProps {
  sectionWrapper: object;
  textArea: object;
  buttonArea: object;
  buttonStyle: object;
  title: object;
  description: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const Newsletter = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
  model,
  isAR,
  data,
}: NewsletterProps) => {
  return (
    <Box {...sectionWrapper} as="section">
      <Container>
        <NewsletterWrapper>
          <Box {...textArea}>
            <Heading content={data.title} {...title} />
            <Text content={data.description} {...description} />
          </Box>
          <Box {...buttonArea}>
            <ContactFormWrapper>
              <Input
                inputType="email"
                label="Email address"
                iconPosition="right"
                isMaterial={true}
                className="email_input"
              />
              <Button {...buttonStyle} title={data.button_label} />
            </ContactFormWrapper>
          </Box>
        </NewsletterWrapper>
      </Container>
    </Box>
  );
};

Newsletter.defaultProps = {
  sectionWrapper: {},
  textArea: {
    mb: ["40px", "40px", "40px", "0", "0"],
    pr: ["0", "0", "0", "80px", "100px"],
  },
  title: {
    fontSize: ["18px", "20px", "22px", "24px", "26px"],
    fontWeight: "500",
    color: "#fff",
    lineHeight: "1.34",
    mb: ["14px", "14px", "14px", "14px", "13px"],
    textAlign: ["center", "center", "center", "left", "left"],
    letterSpacing: "-0.025em",
  },
  description: {
    fontSize: ["14px", "14px"],
    fontWeight: "400",
    color: "#fefefe",
    lineHeight: "1.7",
    mb: 0,
    textAlign: ["center", "center", "center", "left", "left"],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "700",
    pl: "30px",
    pr: "30px",
    colors: "secondaryWithBg",
    color: "#03103b",
  },
};

export default withModelToDataObjProp(Newsletter);
