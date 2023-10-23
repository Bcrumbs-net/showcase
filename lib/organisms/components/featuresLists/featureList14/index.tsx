import React from "react";
import { Box, Container } from "../../../../atoms";
import { Text } from "../../../../atoms";
import { Heading } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import ServiceSectionWrapper from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface ServiceSectionProps {
  row: object;
  col: object;
  sectionHeader: object;
  sectionTitle: object;
  sectionSubTitle: object;
  featureTitle: object;
  featureDescription: object;
  iconStyle: object;
  contentStyle: object;
  blockWrapperStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ServiceSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
  model,
  isAR,
  data,
}: ServiceSectionProps) => {
  return (
    <ServiceSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.title} {...sectionSubTitle} />
          <Heading content={data.subTitle} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children &&
            model.children.map((feature, index) => {
              let subData = feature.data.reduce(function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <Box className="col" {...col} key={index}>
                  <FeatureBlock
                    icon={<i className={subData.icon} />}
                    wrapperStyle={blockWrapperStyle}
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    title={
                      <Heading content={subData.title} {...featureTitle} />
                    }
                    description={
                      <Text
                        content={subData.description}
                        {...featureDescription}
                      />
                    }
                    className="saasService"
                  />
                </Box>
              );
            })}
        </Box>
      </Container>
    </ServiceSectionWrapper>
  );
};

// ServiceSection default style
ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["50px", "50px", "50px", "80px"],
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#5268db",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "500",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"],
  },
  // feature icon default style
  iconStyle: {
    width: ["70px", "80px"],
    height: ["70px", "80px"],
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ["32px", "36px"],
    color: "#ffffff",
    overflow: "hidden",
    mb: "30px",
    borderBottomLeftRadius: "50%",
  },
  // feature content default style
  contentStyle: {
    textAlign: "left",
    mt: "-5px",
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    letterSpacing: "-0.020em",
    mb: "10px",
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d4ccc",
  },
};

export default withModelToDataObjProp(ServiceSection);
