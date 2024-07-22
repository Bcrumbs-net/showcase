import React from "react";
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/TabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";
import "rc-tabs/assets/index.css";
import { Box, Text, Heading, Image, Container } from "../../../../atoms";
import SectionWrapper from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface UpdateScreenProps {
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const UpdateScreen = ({
  secTitleWrapper,
  secText,
  secHeading,
  model,
  isAR,
  data,
}: UpdateScreenProps) => {
  return (
    <SectionWrapper id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subtitle} />
        </Box>
        <Tabs
          renderTabBar={() => <ScrollableInkTabBar />}
          renderTabContent={() => <TabContent animated={false} />}
          className="update-screen-tab"
        >
          {model.children?.map((item, index) => {
            const screenMap: Record<string, string> = item.data.reduce(
              function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              },
              {}
            );
            return (
              <TabPane
                tab={
                  <>
                    {/*(screenMap.icon ? <Icon icon={screenMap.icon} size={24} /> : null)*/}
                    {screenMap.title}
                  </>
                }
                key={index + 1}
              >
                <Image src={screenMap.image} alt={`screenshot-${index + 1}`} />
              </TabPane>
            );
          })}
        </Tabs>
      </Container>
    </SectionWrapper>
  );
};

UpdateScreen.defaultProps = {
  secTitleWrapper: {
    mb: ["60px", "80px"],
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#2eb582",
    mb: "12px",
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "540px",
    maxWidth: "100%",
  },
};

export default withModelToDataObjProp(UpdateScreen);
