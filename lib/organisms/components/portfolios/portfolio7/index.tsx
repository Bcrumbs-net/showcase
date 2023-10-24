import React from "react";
import Link from "next/link";
import { Heading, Text, Container } from "../../../../atoms";
import BlockWrapper, {
  MilestoneCard,
  CounterWrapper,
  CounterItem,
} from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface MilestoneBlockProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const MilestoneBlock = ({ model, isAR, data }: MilestoneBlockProps) => {
  let milestoneItems = [];
  if (model.children && model.children.length > 0) {
    milestoneItems = model.children.map((milestoneData, index) => {
      const milestoneMap: Record<string, string> = milestoneData.data.reduce(
        function (map, obj) {
          map[obj.Key] = obj.Value;
          return map;
        },
        {}
      );
      return milestoneMap;
    });
  }
  return (
    <Container id={model.name} width="1260px">
      <BlockWrapper>
        <MilestoneCard>
          <Text content={data.title} />
          <Heading content={data.amount} />
          <Text content={data.text} />
          <Link href="{data.meetOurDonateLabel}">
            <a className="learn__more-btn">
              <span className="hyphen" />
              <span className="btn_text">{data.meetOurDonateLabel}</span>
            </a>
          </Link>
        </MilestoneCard>
      </BlockWrapper>
      <CounterWrapper>
        {milestoneItems.map((item) => (
          <CounterItem key={`counter_key${item.id}`}>
            <Heading as="h3" content={item.amount} />
            <Text content={item.title} />
          </CounterItem>
        ))}
      </CounterWrapper>
    </Container>
  );
};

export default withModelToDataObjProp(MilestoneBlock);
