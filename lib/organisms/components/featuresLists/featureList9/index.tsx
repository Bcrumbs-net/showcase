import React from "react";
import Fade from "react-reveal/Fade";
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { ScalableWrapper, FeatureSection } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface ScalableHistoryProps {
  row: object;
  col: object;
  title: object;
  description: object;
  btnStyle: object;
  sectionSubTitle: object;
  cardArea: object;
  featureTitleStyle: object;
  featureDescriptionStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ScalableHistory = ({
  row,
  col,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  featureTitleStyle,
  featureDescriptionStyle,
  model,
  isAR,
  data,
}: ScalableHistoryProps) => {
  return (
    <ScalableWrapper id={model.name}>
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text content={data.title} {...sectionSubTitle} />
            <FeatureBlock
              title={<Heading {...title} content={data.header} />}
              description={<Text {...description} content={data.desc} />}
            />
            <FeatureSection>
              {model.children.map((item, index) => {
                const featureMap: Record<string, string> = item.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <div key={`feature-${index}`} className="featureWrapper">
                    <Fade up>
                      <Image src={featureMap.image} alt={featureMap.title} />
                      <Box className="contextPortion">
                        <Heading
                          as="h3"
                          content={featureMap.title}
                          {...featureTitleStyle}
                        />
                        <Text
                          content={featureMap.des}
                          {...featureDescriptionStyle}
                        />
                      </Box>
                    </Fade>
                  </div>
                );
              })}
            </FeatureSection>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <Image
              src={data.image}
              className="ScalableImage"
              alt="Scalable Section Image"
            />
          </Box>
        </Box>
      </Container>
    </ScalableWrapper>
  );
};

// Scalable default style
ScalableHistory.defaultProps = {
  // Scalable section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Scalable section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },

  // Scalable section title default style
  title: {
    content: "A Scalable Proof of Investment Vehicle",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "1500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"],
  },
  // Scalable section description default style
  description: {
    content:
      "Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"],
  },
  sectionSubTitle: {
    content: "Fast, Cheap, Zero Fraud",
    as: "span",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "700",
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
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
  // Scalable section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
  },
};

export default withModelToDataObjProp(ScalableHistory);
