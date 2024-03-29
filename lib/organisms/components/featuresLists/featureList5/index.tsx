import React from "react";
import FeatureSectionWrapper from "./style";
import { Text, Container, Box, Heading } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  featureTitle?: object;
  featureDescription?: object;
  iconStyle: object;
  contentStyle: object;
  blockWrapperStyle: object;
  model: GraphContent;
  data: Record<string, string>;
}

const FeatureSection = ({
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
  data,
}: FeatureSectionProps) => {
  return (
    <FeatureSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.title} {...sectionSubTitle} />
          <Heading content={data.subtitle} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children &&
            model.children.map((feature, index) => {
              const subData: Record<string, string> = feature.data.reduce(
                function (map, obj) {
                  map[obj.Key] = obj.Value;
                  return map;
                },
                {}
              );
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
                    className="saasFeature"
                  />
                </Box>
              );
            })}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "40px", "40px", "80px"],
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
    width: [1, 1 / 2, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "20px", "20px"],
  },
  // feature icon default style
  iconStyle: {
    width: ["70px", "75px", "75px", "84px"],
    height: ["70px", "75px", "75px", "84px"],
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: ["32px", "36px"],
    color: "#ffffff",
    overflow: "hidden",
    mb: ["20px", "20px", "20px", "30px"],
    borderBottomLeftRadius: "50%",
  },
  // feature content default style
  contentStyle: {
    textAlign: "left",
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em",
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d4ccc",
  },
};

export default withModelToDataObjProp(FeatureSection);
