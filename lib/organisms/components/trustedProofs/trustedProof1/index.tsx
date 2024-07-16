import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import {
  Box,
  Text,
  Heading,
  Image,
  Container,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { TrustedWrapper, FeatureSection } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface TrustedHistoryProps {
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
const TrustedHistory = ({
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
}: TrustedHistoryProps) => {
  return (
    <TrustedWrapper id="trusted">
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} content={data.title} />
            <FeatureBlock
              title={<Heading {...title} content={data.header} />}
              description={<Text {...description} content={data.desc} />}
            />
            <Fade up>
              <div className="TrustedImageBtn">
                {data.apple_store_url ? (
                  (<Link href={data.apple_store_url}>

                    <Image
                      src={data.apple_store_icon}
                      className="app_image_area"
                      alt="App Image"
                    />

                  </Link>)
                ) : null}
                {data.google_play_url ? (
                  (<Link href={data.google_play_url}>

                    <Image
                      src={data.google_play_icon}
                      className="play_image_area"
                      alt="GooglePlay Image"
                    />

                  </Link>)
                ) : null}
              </div>
            </Fade>
          </Box>
          <Box className="colright" {...col} {...cardArea}>
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
                  </div>
                );
              })}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TrustedWrapper>
  );
};



// Trusted default style
TrustedHistory.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Trusted section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },

  // Trusted section title default style
  title: {
    content: "A Trusted Proof of Investment Vehicle",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "100%", "415px"],
    textAlign: ["left", "left"],
  },
  // Trusted section description default style
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
  featureTitleStyle: {
    fontSize: ["18px", "18px", "20px", "20px", "20px"],
    lineHeight: ["1", "1", "1", "1", "1"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
  },
};

export default withModelToDataObjProp(TrustedHistory);
