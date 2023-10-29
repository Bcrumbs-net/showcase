import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Box, Text, Heading, Container } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { FeatureSliderWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
/*const images = [
  {
    original: `${Image1}`,
    originalAlt: 'slide one',
  },
  {
    original: `${Image2}`,
    originalAlt: 'slide two',
  },
  {
    original: `${Image3}`,
    originalAlt: 'slide three',
  },
  {
    original: `${Image2}`,
    originalAlt: 'slide four',
  },
  {
    original: `${Image1}`,
    originalAlt: 'slide five',
  },
  {
    original: `${Image3}`,
    originalAlt: 'slide six',
  },
];*/
interface FeatureSliderProps {
  row: object;
  title: object;
  description: object;
  sectionSubTitle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FeatureSlider = ({
  row,
  title,
  description,
  sectionSubTitle,
  model,
  isAR,
  data,
}: FeatureSliderProps) => {
  const images = model.children.map((item, index) => {
    const imageMap: Record<string, string> = item.data.reduce(function (
      map,
      obj
    ) {
      map[obj.Key] = obj.Value;
      return map;
    },
    {});
    return {
      original: imageMap.image,
    };
  });
  return (
    <FeatureSliderWrapper id={model.name}>
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <Text {...sectionSubTitle} content={data.title} />
          <FeatureBlock
            title={<Heading {...title} content={data.header} />}
            description={<Text {...description} content={data.desc} />}
          />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={false}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// Trusted default style
FeatureSlider.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    flexDirection: "column",
    alignSelf: "center",
    justifyContent: "center",
  },

  title: {
    content: "A Trusted Proof of Investment Vehicle",
    fontSize: ["24px", "26px", "30px", "36px", "40px"],
    lineHeight: ["30px", "32px", "40px", "50px", "55px"],
    fontWeight: "700",
    color: "#32325d",
    letterSpacing: "-0.010em",
    mb: "20px",
    textAlign: ["center", "center"],
  },

  description: {
    content:
      "Easily buy, sell or exchange over 30 different cryptocurrencies. Now euro deposits and withdrawn available.",
    fontSize: "16px",
    fontWeight: "400",
    color: "#525f7f",
    lineHeight: "28px",
    mb: ["25px", "25px", "30px", "30px", "45px"],
    textAlign: ["center", "center"],
  },
  sectionSubTitle: {
    content: "Fast, Cheap, Zero Fraud",
    as: "span",
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontFamily: "Poppins",
    fontWeight: "600",
    lineHeight: "27px",
    color: "#525f7f",
    textAlign: ["center", "center"],
  },
};

export default withModelToDataObjProp(FeatureSlider);
