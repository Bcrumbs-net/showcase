import { GraphContent } from "@bcrumbs.net/bc-api";
import Fade from "react-reveal/Fade";
import QualitySectionWrapper from "./style";
import { Container, Box, Heading, Card, Image, Text } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface QualitySectionProps {
  row?: object;
  col?: object;
  featureCol?: object;
  title?: object;
  description?: object;
  button?: object;
  textArea?: object;
  imageArea?: object;
  imageAreaRow?: object;
  imageWrapper?: any;
  featureTitle?: object;
  featureDescription?: object;
  iconStyle?: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const QualitySection = ({
  row,
  col,
  title,
  featureCol,
  description,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  featureTitle,
  featureDescription,
  iconStyle,
  model,
  data,
}: QualitySectionProps) => {
  return (
    <QualitySectionWrapper id={model.name}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} {...textArea}>
            <FeatureBlock
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.description} {...description} />}
            />
          </Box>
        </Box>
        <Box className="row" {...row} {...textArea}>
          {model.children.map((qualitySection, index) => {
            const qualitySectionMap: Record<string, string> =
              qualitySection.data.reduce(function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
            return (
              <Box
                className="col"
                {...featureCol}
                key={`qualitySectionMap-${index}`}
              >
                <FeatureBlock
                  icon={<i className={qualitySectionMap.icon} />}
                  iconPosition="left"
                  iconStyle={iconStyle}
                  title={
                    <Heading
                      content={qualitySectionMap.title}
                      {...featureTitle}
                    />
                  }
                  description={
                    <Text
                      content={qualitySectionMap.description}
                      {...featureDescription}
                    />
                  }
                />
              </Box>
            );
          })}
        </Box>
      </Container>
      <Container fullWidth noGutter className="info-sec-container">
        <Box className="row" {...row} {...imageAreaRow}>
          <Box className="col" {...col} {...imageArea}>
            <Card {...imageWrapper}>
              <Fade right delay={90}>
                <Image src={data.featuredImage} alt="Feature Image" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
    </QualitySectionWrapper>
  );
};

QualitySection.defaultProps = {
  // Quality section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Quality section iamge row default style
  imageAreaRow: {
    flexDirection: "row-reverse",
  },
  // Quality section col default style
  col: {
    pr: "15px",
    pl: "15px",
  },
  // Quality feature col default style
  featureCol: {
    width: [1, 1, 1 / 2],
    pr: "15px",
    pl: "15px",
  },
  // Quality section text area default style
  textArea: {
    width: [1, "100%", "100%", "70%", "64%"],
  },
  // Quality section image area default style
  imageArea: {
    width: [1, "100%", "100%", "30%", "38%"],
    flexBox: true,
    flexDirection: "row-reverse",
  },
  // Quality section image wrapper default style
  imageWrapper: {
    boxShadow: "none",
  },
  // Quality section title default style
  title: {
    fontSize: ["26px", "26px", "32px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px",
  },
  // Quality section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "33px",
  },
  // feature icon default style
  iconStyle: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    color: "#ffffff",
    overflow: "hidden",
    mt: "6px",
    mr: "22px",
    flexShrink: 0,
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em",
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.84",
    color: "#343d48cc",
  },
};

export default withModelToDataObjProp(QualitySection);
