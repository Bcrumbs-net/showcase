import FeatureSectionTwoWrapper from "./style";
import { Container, Box, Heading, Image, Text } from "../../../../atoms";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSectionProps {
  row?: object;
  col?: object;
  sectionHeader?: object;
  featureTitle?: object;
  iconStyle?: object;
  sectionTitle?: object;
  contentStyle?: object;
  blockWrapperStyle?: object;
  sectionSubTitle?: object;
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
  iconStyle,
  contentStyle,
  blockWrapperStyle,
  model,
  data,
}: FeatureSectionProps) => {
  let featureItems = [];
  if (model.children && model.children.length > 0) {
    featureItems = model.children.map((featureData, index) => {
      const featureMap: Record<string, string> = featureData.data.reduce(
        function (map, obj) {
          map[obj.Key] = obj.Value;
          return map;
        },
        {}
      );
      return featureMap;
    });
  }
  return (
    <FeatureSectionTwoWrapper>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={data.sectionSubTitle} />
          <Heading {...sectionTitle} content={data.subtitle} />
        </Box>
      </Container>
    </FeatureSectionTwoWrapper>
  );
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["56px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    content: "KEY FEATURES",
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
    content: "Key Features Of our App",
    textAlign: "center",
    fontSize: ["20px", "24px", "24px", "24px", "30px"],
    fontWeight: "400",
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
    width: [1 / 2, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["10px", "20px", "20px", "40px"],
  },
  // feature icon default style
  iconStyle: {
    width: "75px",
    height: "75px",
    m: "0 auto",
    borderRadius: "50%",
    bg: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    color: "#29cf8a",
    overflow: "hidden",
    mb: "15px",
  },
  // feature content default style
  contentStyle: {
    textAlign: "center",
  },
  // feature title default style
  featureTitle: {
    fontSize: ["16px", "18px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: "20px",
    letterSpacing: "-0.020em",
  },
};

export default withModelToDataObjProp(FeatureSection);
