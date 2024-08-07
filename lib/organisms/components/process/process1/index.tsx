import React from "react";
import { Icon } from "react-icons-kit";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Container,
} from "../../../../atoms";
import { plus } from "react-icons-kit/feather/plus";
import { ButtonWrapper } from "../../../../../bootstrapers/showcase/templates/portfolio/globalStyle";
import ProcessItem from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface ProcessSectionProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secTitle: object;
  secDescription: object;
  processRow: object;
  processCol: object;
  processImageStyle: object;
  processTitleStyle: object;
  processDescriptionStyle: object;
  learningRow: object;
  learningContentArea: object;
  learningListArea: object;
  learningTitle: object;
  learningSubTitle: object;
  learningDescription: object;
  buttonWrapper: object;
  buttonLabelStyle: object;
  buttonStyle: object;
  learningList: object;
  listItem: object;
  listText: object;
  listTitle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
  data2: Record<string, string>;
  model2: GraphContent;
}
const ProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  learningRow,
  learningContentArea,
  learningListArea,
  learningTitle,
  learningSubTitle,
  learningDescription,
  buttonWrapper,
  buttonLabelStyle,
  buttonStyle,
  learningList,
  listItem,
  listText,
  listTitle,
  model,
  model2,
  isAR,
  data,
  data2,
}: ProcessSectionProps) => {
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subtitle} />
        </Box>
        <Box {...processRow}>
          {model.children &&
            model.children.map((itemObj, index) => {
              const item: Record<string, string> = itemObj.data.reduce(
                function (map, obj) {
                  map[obj.Key] = obj.Value;
                  return map;
                },
                {}
              );
              return (
                <Box
                  {...processCol}
                  key={`process-item-${index}`}
                  className="process_item_col"
                >
                  <ProcessItem className="process_item">
                    <Image
                      src={item.image}
                      alt={`process-image-${index + 1}`}
                      {...processImageStyle}
                    />
                    <Heading
                      as="h3"
                      content={item.title}
                      {...processTitleStyle}
                    />
                    <Text
                      content={item.description}
                      {...processDescriptionStyle}
                    />
                  </ProcessItem>
                </Box>
              );
            })}
        </Box>

        <Box {...learningRow}>
          <Box {...learningContentArea}>
            <Heading content={data2.tilte} {...learningTitle} />
            <Text content={data2.subtitle} {...learningSubTitle} />
            <Text {...learningDescription} content={data2.subtitle_2} />
            <Text {...learningDescription} content={data2.subtitle_3} />
            <Box {...buttonWrapper}>
              <Text content={data2.startButton} {...buttonLabelStyle} />
              <ButtonWrapper>
                <Button
                  title={data2.buttonLabel}
                  className="portfolio_button"
                  {...buttonStyle}
                />
              </ButtonWrapper>
            </Box>
          </Box>
          <Box {...learningListArea}>
            {model2.children &&
              model2.children.map((serviceListObj, index) => {
                const serviceList: Record<string, string> =
                  serviceListObj.data.reduce(function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});
                return (
                  <Box {...learningList} key={`serviceList-${index}`}>
                    <Heading content={serviceList.title} {...listTitle} />
                    {serviceListObj.children &&
                      serviceListObj.children.map((itemObj, index) => {
                        const item: Record<string, string> =
                          itemObj.data.reduce(function (map, obj) {
                            map[obj.Key] = obj.Value;
                            return map;
                          }, {});
                        return (
                          <Box {...listItem} key={`list-item-${index}`}>
                            <Icon
                              icon={item.icon || plus}
                              size={item.iconSize || 12}
                            />
                            <Text
                              as="span"
                              content={item.content}
                              {...listText}
                            />
                          </Box>
                        );
                      })}
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ["60px", "80px", "90px", "100px", "140px"],
    pb: ["10px", "40px", "30px", "50px", "50px"],
  },
  secTitleWrapper: {
    mb: ["60px", "105px"],
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center",
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
    textAlign: "center",
  },
  processRow: {
    flexBox: true,
    flexWrap: "wrap",
    ml: ["0", "-15px", "-30px", "-70px", "-70px"],
    mr: ["0", "-15px", "-30px", "-70px", "-70px"],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ["0", "15px", "30px", "70px", "70px"],
    pr: ["0", "15px", "30px", "70px", "70px"],
    mb: "40px",
  },
  processImageStyle: {
    ml: "auto",
    mr: "auto",
    mb: "35px",
  },
  processTitleStyle: {
    fontSize: ["20px", "18px", "20px", "20px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    textAlign: "center",
    mb: ["20px", "20px", "27px", "27px", "27px"],
  },
  processDescriptionStyle: {
    fontSize: ["15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    textAlign: "center",
    lineHeight: "1.5",
  },
  learningRow: {
    flexBox: true,
    flexWrap: "wrap",
    mt: ["20px", "30px", "70px", "80px", "110px"],
  },
  learningContentArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    pr: ["0px", "0px", "60px", "80px", "160px"],
    mb: ["70px", "70px", "0", "0", "0"],
  },
  learningTitle: {
    fontSize: ["22px", "22px", "24px", "30px", "30px"],
    fontWeight: "700",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["20px", "20px", "15px", "20px", "20px"],
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningSubTitle: {
    fontSize: ["16px", "16px", "18px", "20px", "20px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "20px",
    pr: ["0", "0", "0", "65px", "65px"],
  },
  learningDescription: {
    fontSize: "16px",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "25px",
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: "center",
    mt: ["30px", "40px", "40px", "80px", "80px"],
    flexWrap: ["wrap"],
  },
  buttonLabelStyle: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#3444f1",
    mb: ["20px", "20px", "20px", "0", "0"],
    mr: "30px",
    width: ["100%", "100%", "100%", "auto", "auto"],
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px",
  },
  learningListArea: {
    width: ["100%", "100%", "50%", "50%", "50%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  learningList: {
    width: ["100%", "33.3333333%", "50%", "50%", "50%"],
    pl: ["0", "0", "35px", "35px", "35x"],
    pr: ["0", "30px", "0", "0", "0"],
    mb: ["40px", "40px", "60px", "80px", "90px"],
  },
  listTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#302b4e",
    mb: "25px",
  },
  listItem: {
    flexBox: true,
    alignItems: "center",
    color: "#43414e",
    mb: "16px",
  },
  listText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#43414e",
    mb: "0",
    ml: "5px",
  },
};

export default withModelToDataObjProp(ProcessSection);
