import { GraphContent } from "@bcrumbs.net/bc-api";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import AboutUsSectionWrapper from "./style";
import { Box, Card, Heading, Button, Image, Text } from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
interface IAboutUsSectionProps {
  row?: object;
  col?: object;
  textArea?: object;
  title?: object;
  description?: object;
  btnStyle?: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
  featureTitle: any;
}

const AboutUsSection = ({
  row,
  col,
  title,
  description,
  textArea,
  featureTitle,
  btnStyle,
  model,
  isAR,
  data,
}: IAboutUsSectionProps) => {
  return (
    <AboutUsSectionWrapper id={model.name}>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Card className="group-gallery">
            <Box className="col1">
              <Fade top delay={30}>
                <Image src={data.GroupImage1} alt="Feature Image" />
              </Fade>
              <Fade bottom delay={90}>
                <Image src={data.GroupImage3} alt="Feature Image" />
              </Fade>
            </Box>
            <Box className="col2">
              <Fade left delay={60}>
                <Image src={data.GroupImage2} alt="Feature Image" />
              </Fade>
            </Box>
          </Card>
        </Box>
        <Box className="col" {...col}>
          <Box
            {...textArea}
            style={{
              textAlign: isAR ? "right" : "left",
              direction: isAR ? "rtl" : "ltr",
              paddingRight: isAR ? "20px" : "",
            }}
          >
            <FeatureBlock
              style={{ paddingRight: isAR ? "20" : "" }}
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.description} {...description} />}
              isAR={isAR}
            />
          </Box>
          <Box
            {...textArea}
            style={{
              textAlign: isAR ? "right" : "left",
              paddingRight: isAR ? "20px" : "",
            }}
          >
            {model.children &&
              model.children.map((feature, index) => {
                const featureMap: Record<string, string> = feature.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <FeatureBlock
                    isAR={isAR}
                    key={`feature_point-${index}`}
                    icon={<i className={featureMap.icon} />}
                    iconPosition="left"
                    title={
                      <Heading
                        content={featureMap.title}
                        {...featureTitle}
                        style={{
                          textAlign: isAR ? "right" : "left",
                          direction: isAR ? "rtl" : "ltr",
                        }}
                      />
                    }
                  />
                );
              })}
            {data.btnText ? (
              <Button
                title={data.btnText}
                {...btnStyle}
                onClick={() => {
                  window.location.replace(data.btnUrl);
                }}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </AboutUsSectionWrapper>
  );
};

AboutUsSection.defaultProps = {
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // About us section col default style
  col: {
    width: [1, "100%", "50%"],
  },
  // About us section text area default style
  textArea: {
    maxWidth: "490px",
    pl: "40px",
  },
  // About us section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "30px",
  },
  // About us section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px",
  },

  // feature title default style
  featureTitle: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#343d48",
    lineHeight: "1.5",
    mb: "8px",
    letterSpacing: "-0.020em",
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default withModelToDataObjProp(AboutUsSection);
