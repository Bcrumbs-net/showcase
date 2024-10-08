import React from "react";
import Link from "next/link";
import { Box, Text, Heading, Container, Button } from "../../../../atoms";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../../../molecules";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/entypo/plus";
import { minus } from "react-icons-kit/entypo/minus";
import FaqWrapper from "./.style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import { FaqDataType } from "../../../types/faqTypes";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FaqSectionProps {
  sectionWrapper?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  secText: object;
  sectionSubTitle?: object;
  buttonWrapper?: object;
  button?: object;
  title: any;
  description: any;
  model: GraphContent;
  data: FaqDataType;
  isAR: boolean;
}

const FaqSection = ({
  sectionWrapper,
  row,
  col,
  sectionTitle,
  sectionSubTitle,
  secText,
  title,
  description,
  buttonWrapper,
  button,
  model,
  data,
  isAR
}: FaqSectionProps) => {
  return (
    <Box {...sectionWrapper} id={model.name}>
      <Container>
        <Box {...sectionTitle}>
          <Text {...secText} content={data.title} />
          <Heading {...sectionSubTitle} content={data.subTitle} />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <FaqWrapper>
              <Accordion>
                <>
                  {data.subdata &&
                    data.subdata.map((faqSectionMap, index) => {
                      return (
                        <AccordionItem
                          className="accordion_item"
                          key={`accordion-${index}`}
                          allowZeroExpanded={faqSectionMap.expand}
                        >
                          <>
                            <AccordionTitle className="accordion_title">
                              <>
                                <Heading {...title} content={faqSectionMap.title} />
                                <IconWrapper>
                                  <OpenIcon>
                                    <Icon icon={minus} size={18} />
                                  </OpenIcon>
                                  <CloseIcon>
                                    <Icon icon={plus} size={18} />
                                  </CloseIcon>
                                </IconWrapper>
                              </>
                            </AccordionTitle>
                            <AccordionBody className="accordion_body">
                              <Text
                                {...description}
                                content={faqSectionMap.description}
                              />
                            </AccordionBody>
                          </>
                        </AccordionItem>
                      );
                    })}
                </>
              </Accordion>
            </FaqWrapper>
            <Box {...buttonWrapper}>
              <Link href="#">

                <Button {...button} title="EXPLORE FORUM" />

              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: "section",
    pt: ["20px", "30px", "50px", "50px"],
    pb: ["60px", "80px", "80px", "80px"],
  },
  sectionTitle: {
    mb: ["55px", "65px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#2aa275",
    mb: "5px",
  },
  sectionSubTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "500",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    lineHeight: "1.67",
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  col: {
    width: ["100%", "100%", "75%", "75%"],
  },
  title: {
    fontSize: ["16px", "19px"],
    fontWeight: "400",
    color: "headingColor",
    letterSpacing: "-0.025em",
    mb: 0,
  },
  description: {
    fontSize: "15px",
    color: "textColor",
    lineHeight: "1.75",
    mb: 0,
  },
  buttonWrapper: {
    mt: "50px",
    flexBox: true,
    justifyContent: "center",
  },
  button: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    pl: ["22px"],
    pr: ["22px"],
    colors: "secondaryWithBg",
    minWidth: "150px",
  },
};

export default withModelToDataObjProp(FaqSection);
