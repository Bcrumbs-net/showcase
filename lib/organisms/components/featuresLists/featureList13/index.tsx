import React from "react";
import { Box, Text, Heading, Container } from "../../../../atoms";
import SectionWrapper from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface ServiceSectionProps {
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  Row: object;
  Col: object;
  serviceTitleStyle: object;
  secDes: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ServiceSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  Row,
  Col,
  serviceTitleStyle,
  secDes,
  model,
  isAR,
  data,
}: ServiceSectionProps) => {
  return (
    <SectionWrapper id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subtitle} />
          <Text {...secDes} content={data.description} />
        </Box>
        <Box {...Row}>
          {model.children.map((item, index) => {
            const serviceMap: Record<string, string> = item.data.reduce(
              function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              },
              {}
            );
            return (
              <Box
                {...Col}
                key={`service-item-${index}`}
                className="service_item_col"
              >
                <Box className="service_item">
                  <Box className="service_icon">
                    <i className={serviceMap.icon} />
                  </Box>
                  <Heading
                    as="h3"
                    content={serviceMap.title}
                    {...serviceTitleStyle}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

ServiceSection.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#2eb582",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
  Row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    ml: ["0", "-15px", "-20px", "-35px", "-35px"],
    mr: ["0", "-15px", "-20px", "-35px", "-35px"],
  },
  Col: {
    pl: ["15px", "15px", "25x", "35px", "35px"],
    pr: ["15px", "15px", "25px", "35px", "35px"],
    mb: "40px",
  },
  serviceTitleStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "17px"],
    fontWeight: "500",
    color: "#2eb582",
    mb: 0,
  },
  secDes: {
    fontSize: ["14px", "15px", "16px"],
    color: "#5d646d",
    lineHeight: "1.875",
    mt: "30px",
    ml: "auto",
    mr: "auto",
    width: "470px",
    maxWidth: "100%",
    textAlign: "center",
  },
};

export default withModelToDataObjProp(ServiceSection);
