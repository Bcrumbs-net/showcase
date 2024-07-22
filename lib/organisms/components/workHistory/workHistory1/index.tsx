import { GraphContent } from "@bcrumbs.net/bc-api";
import { Box, Text, Heading, Card, Button, Container } from "../../../../atoms";
import Link from "next/link";
import CountUp from "react-countup";
import { FeatureBlock } from "../../../../molecules";
import WorkHistoryWrapper, { CounterUpArea } from "./style";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
interface WorkHistorySectionProps {
  sectionHeader: object;
  sectionTitle: object;
  row: object;
  col: object;
  sectionSubTitle: object;
  btnStyle: object;
  description: object;
  cardStyle: object;
  title: object;
  content: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const WorkHistory = ({
  row,
  col,
  cardStyle,
  title,
  description,
  btnStyle,
  content,
  model,
  data,
}: WorkHistorySectionProps) => {
  return (
    <WorkHistoryWrapper id={model.name}>
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content={data.title} {...title} />}
              description={<Text content={data.description} {...description} />}
              button={
                <Button
                  title={data.btnText}
                  {...btnStyle}
                  onClick={() => window.open(data.btnUrl)}
                />
              }
            />
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              {model.children?.map((workHistory, index) => {
                const workHistoryMap: Record<string, string> =
                  workHistory.data.reduce(function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});

                return (
                  <Card
                    className="card"
                    key={`workHistoryMap-${index}`}
                    {...cardStyle}
                  >
                    <h3>
                      <CountUp
                        start={parseInt(workHistoryMap.start)}
                        end={parseInt(workHistoryMap.end)}
                      />{" "}
                      {workHistoryMap.sign}
                    </h3>
                    <Text content={workHistoryMap.content} {...content} />
                  </Card>
                );
              })}
              <Card className="card" {...cardStyle}>
                <Text content="& Much More" />
                {data.btnUrl ? (
                  <Link href={data.btnUrl}>
                    View work history
                  </Link>
                ) : null}
              </Card>
            </CounterUpArea>
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // WorkHistory section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: "center",
  },
  // Card default style
  cardStyle: {
    p: ["20px 20px", "30px 20px", "30px 20px", "53px 40px"],
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)",
  },
  // WorkHistory section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px",
  },
  // WorkHistory section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px",
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default withModelToDataObjProp(WorkHistory);
