import ImageGallery from "react-image-gallery";
import FeatureSliderWrapper from "./style";
import { Container, Box, Heading, Text } from "../../../../atoms";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSliderProps {
  sectionHeader?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  model: GraphContent;
  data: Record<string, string>;
}

const FeatureSlider = ({
  sectionSubTitle,
  sectionTitle,
  sectionHeader,
  model,
  data,
}: FeatureSliderProps) => {
  let images = [];
  if (model.children && model.children.length > 0) {
    images = model.children.map((featureSlider, index) => {
      const sliderMap = convertDataModelToDataObject(featureSlider);
      return sliderMap;
    });
  }
  return (
    <FeatureSliderWrapper id={model.name}>
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={data.sectionHeader} />
          <Heading {...sectionTitle} content={data.sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: "WHY CHOOSE US",
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.13em",
    fontWeight: "700",
    color: "#1a73e8",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    content: "Key Features of Our App",
    textAlign: "center",
    fontSize: ["20px", "24px", "24px", "24px", "30px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
};

export default withModelToDataObjProp(FeatureSlider);
