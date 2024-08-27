import React from "react";
import { Box, Container, Text, Heading } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import SectionWrapper from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSectionProps {
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  row: object;
  col: object;
  FeatureItemStyle: object;
  iconStyle: object;
  contentStyle: object;
  featureTitle: object;
  featureDescription: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FeatureSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  row,
  col,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription,
  model,
  isAR,
  data,
}: FeatureSectionProps) => {
  return (
    <SectionWrapper id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subtitle} />
        </Box>
        <Box {...row}>
          {model.children?.map((item, index) => {
            const featureMap: Record<string, string> = item.data.reduce(
              function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              },
              {}
            );
            return (
              <Box
                {...col}
                key={`feature-item-${index}`}
                className="feature_col"
              >
                <FeatureBlock
                  icon={<i className={featureMap.icon} />}
                  wrapperStyle={FeatureItemStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  iconPosition="left"
                  title={
                    <Heading content={featureMap.title} {...featureTitle} />
                  }
                  description={
                    <Text
                      content={featureMap.description}
                      {...featureDescription}
                    />
                  }
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </SectionWrapper>
  );
};

FeatureSection.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "100px"],
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
    color: "#2eb582",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["-30px", "-30px", "-30px", "-25px", "-30px"],
    mr: ["-30px", "-30px", "-30px", "-25px", "-45px"],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ["30px", "30px", "30px", "25px", "45px"],
    pr: ["30px", "30px", "30px", "25px", "45px"],
    mb: ["50px", "70px"],
  },
  FeatureItemStyle: {},
  iconStyle: {
    width: ["72px", "72px", "72px", "72px", "82px"],
    height: ["72px", "72px", "72px", "72px", "82px"],
    mr: "20px",
    borderRadius: ["20px", "20px", "20px", "20px", "28px"],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bg: "#ffecef",
    color: "#2eb582",
    fontSize: ["26px", "26px", "26px", "26px", "30px"],
  },
  featureTitle: {
    fontSize: ["17px", "19px"],
    fontWeight: "500",
    color: "#0f2137",
    letterSpacing: "-0.020em",
    lineHeight: "1.5",
    mb: ["10px", "13px"],
  },
  featureDescription: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#5d646d",
    letterSpacing: "-0.025em",
    lineHeight: "1.88",
    mb: 0,
  },
};

export default withModelToDataObjProp(FeatureSection);
