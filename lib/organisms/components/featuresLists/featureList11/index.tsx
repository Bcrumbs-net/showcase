import React from "react";
import {
  Box,
  Container,
  Image,
  Text,
  Heading,
  Button,
} from "../../../../atoms";
import Fade from "react-reveal/Fade";
import { FeatureBlock } from "../../../../molecules";
import { TransactionsWrapper, FeatureSection } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface TransactionsHistoryProps {
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
const TransactionsHistory = ({
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
}: TransactionsHistoryProps) => {
  return (
    <TransactionsWrapper id={model.name}>
      <Container>
        <Box className="row" {...row}>
          <Box className="colleft" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} content={data.title} />
            <FeatureBlock
              title={<Heading {...title} content={data.header} />}
              description={<Text {...description} content={data.desc} />}
              button={<Button {...btnStyle} title={data.button_label} />}
            />
          </Box>
          <Box className="colright" {...col} {...cardArea}>
            <FeatureSection>
              {model.children?.map((item, index) => {
                const featureMap: Record<string, string> = item.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <Fade up key={`feature-${index}`}>
                    <div className="featureWrapper">
                      <Image src={featureMap.image} alt={featureMap.title} />
                      <Heading
                        as="h3"
                        content={featureMap.title}
                        {...featureTitleStyle}
                      />
                      <Text
                        content={featureMap.des}
                        {...featureDescriptionStyle}
                      />
                    </div>
                  </Fade>
                );
              })}
            </FeatureSection>
          </Box>
        </Box>
      </Container>
    </TransactionsWrapper>
  );
};

// Transactions default style
TransactionsHistory.defaultProps = {
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
    content: "Our wallet is built for the crypto novice",
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
      "You can trust us for any kind of services and some of the world class companies have also trusted us .",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["30px", "30px", "40px", "40px", "55px"],
    textAlign: ["left", "left"],
    maxWidth: ["100%", "100%", "100%", "100%", "430px"],
  },
  sectionSubTitle: {
    content: "How Transactions Work",
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
    lineHeight: ["25px", "27px", "27px", "27px", "27px"],
    fontWeight: "500",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "10px",
    textAlign: ["left", "left"],
  },
  // Transactions section description default style
  featureDescriptionStyle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "27px",
    textAlign: ["left", "left"],
  },
};

export default withModelToDataObjProp(TransactionsHistory);
