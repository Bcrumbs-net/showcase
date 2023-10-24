import React from "react";
import Link from "next/link";
import { Heading, Text, Image, Box, Container } from "../../../../atoms";
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from "./style";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface HumanityBlockProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const HumanityBlock = ({ row, col, model, isAR, data }: HumanityBlockProps) => {
  let humanityItems = [];
  if (model.children && model.children.length > 0) {
    humanityItems = model.children.map((humanityData) => {
      const humanityMap: Record<string, string> = humanityData.data.reduce(
        function (map, obj) {
          map[obj.Key] = obj.Value;
          return map;
        },
        {}
      );
      return humanityMap;
    });
  }
  return (
    <BlockWrapper id={model.name}>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={data.image} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={data.slogan} />
              <Heading content={data.title} />
              <Text content={data.text} />
              <List>
                {humanityItems.map((item) => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>
              <Link href="{data.LearnMoreUrl}">
                <a className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">{data.LearnMoreLabel} </span>
                </a>
              </Link>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // HumanityBlock col default style
  col: {
    width: ["100%", "50%", "50%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
};

export default withModelToDataObjProp(HumanityBlock);
