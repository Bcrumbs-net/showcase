import {
  Box,
  Text,
  Heading,
  Card,
  Image,
  Button,
  Container,
} from "../../../../atoms";
import { FeatureBlock } from "../../../../molecules";
import PartnerHistoryWrapper, { CounterUpArea } from "./style";
import BackgroundImg from "../../../../assets/image/app/partner-bg.png";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface PartnerHistoryProps {
  row?: object;
  col?: object;
  cardStyle?: object;
  title?: object;
  description?: object;
  sectionHeader?: object;
  cardArea?: object;
  sectionSubTitle?: object;
  btnStyle: object;
  sectionTitle: object;
  model: GraphContent;
  data: Record<string, string>;
}

const PartnerHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  sectionSubTitle,
  cardArea,
  model,
  data,
}: PartnerHistoryProps) => {
  return (
    <PartnerHistoryWrapper id={model.name}>
      <Image
        // @ts-ignore
        src={BackgroundImg}
        alt="backgroungImg"
        className="backgroungImg"
      />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col} style={{ flexDirection: "column" }}>
            <Text {...sectionSubTitle} />
            <FeatureBlock
              title={
                <Heading content={data.title} {...title} className="title" />
              }
              description={
                <Text
                  content={data.description}
                  {...description}
                  className="description"
                />
              }
              button={<Button title={data.buttonLabel} {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col} {...cardArea}>
            <CounterUpArea>
              {model.children.map((client, index) => {
                const clientMap: Record<string, string> = client.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <Card
                    //@ts-ignore
                    className="card"
                    {...cardStyle}
                    key={"PartnerHistoryCard" + index}
                  >
                    <Image src={clientMap.image} alt={clientMap.alt} />
                    <Text content={clientMap.content} />
                  </Card>
                );
              })}
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </PartnerHistoryWrapper>
  );
};


// Partner default style
PartnerHistory.defaultProps = {
  // Partner section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Partner section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1 / 2, 1 / 2, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },
  // Card default style
  cardStyle: {
    p: "53px 40px 35px",
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)",
  },
  // Partner section title default style
  title: {
    content: "Your Trusted Partner For Working Together",
    fontSize: ["26px", "30px", "30px", "48px", "60px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.010em",
    mb: "20px",
    maxWidth: ["100%", "100%", "100%", "490px", "490px"],
    textAlign: ["center", "left"],
  },
  // Partner section description default style
  description: {
    content:
      "You can trust us for any kind of services and some of the world class companies have also trusted us .",
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "2.1",
    mb: "33px",
    textAlign: ["center", "left"],
  },
  sectionSubTitle: {
    content: "TRUSTED PARTNERS",
    as: "span",
    fontSize: "14px",
    letterSpacing: "0.13em",
    fontWeight: "700",
    color: "#1a73e8",
    mb: "10px",
    textAlign: ["center", "left"],
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
  cardArea: {
    pl: [0, 0, "40px", 0, 0],
  },
};

export default withModelToDataObjProp(PartnerHistory);
