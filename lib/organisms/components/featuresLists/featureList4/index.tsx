import FeatureSectionWrapper from "./style";
import { Container, Box, Heading, Text } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSectionProps {
  row: object;
  col: object;
  sectionHeader?: object;
  sectionTitle?: object;
  featureTitle?: object;
  featureDescription?: object;
  iconStyle?: object;
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
  featureDescription,
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
    <FeatureSectionWrapper id="services">
      <Container>
        <Box {...sectionHeader}>
          <Heading {...sectionSubTitle} content={data.sectionTitle} />
          <Text {...sectionTitle} content={data.sectionSubTitle} />
        </Box>
        <Box className="row" {...row}>
          {featureItems.map((feature, index) => (
            <Box className="col" {...col} key={"FeatureSection" + index}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={
                  <Heading
                    {...featureTitle}
                    content={feature.title}
                    //@ts-ignore
                    className="featureTitle"
                  />
                }
                description={
                  <Text
                    {...featureDescription}
                    content={feature.description}
                    //@ts-ignore
                    className="featureDescription"
                  />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};


// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["30px", "30px", "30px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    content: "OUR SERVICES",
    as: "span",
    display: "block",
    fontSize: "14px",
    letterSpacing: "0.13em",
    fontWeight: "700",
    color: "#1a73e8",
    mb: "10px",
    textAlign: ["center"],
  },
  // section title default style
  sectionTitle: {
    content: "Featured Service that We Provide",
    fontSize: ["20px", "24px", "24px", "24px", "30px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    textAlign: ["center"],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["20px", "20px", "20px", "40px"],
  },
  // feature icon default style
  iconStyle: {
    width: "84px",
    height: "84px",
    m: "0 auto",
    borderRadius: "50%",
    bg: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#29cf8a",
    overflow: "hidden",
    mb: ["20px", "20px", "20px", "30px"],
    border: "1px solid rgba(36, 74, 117,0.1)",
  },
  // feature content default style
  contentStyle: {
    textAlign: "center",
  },
  // feature title default style
  featureTitle: {
    textAlign: "center",
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em",
  },
  // feature description default style
  featureDescription: {
    fontSize: ["14px", "15px"],
    lineHeight: "1.75",
    color: "#343d48",
    textAlign: "center",
  },
};

export default withModelToDataObjProp(FeatureSection);
