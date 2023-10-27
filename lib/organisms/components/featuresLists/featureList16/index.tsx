import React from "react";
import { Text, Heading, Container } from "../../../../atoms";
import { BlogPost } from "../../../../molecules";
import SectionWrapper, { SectionHeader, FeatureWrapper } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FeatureSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FeatureSection = ({ model, isAR, data }: FeatureSectionProps) => {
  let featureItems = [];
  if (model.children && model.children.length > 0) {
    featureItems = model.children.map((featureData, index) => {
      const featureMap = convertDataModelToDataObject(featureData);
      return featureMap;
    });
  }

  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <SectionHeader>
          <Heading content={data.title} />
          <Text content={data.slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {featureItems.map((item) => (
            <BlogPost
              key={`option_key${item.id}`}
              thumbUrl={item.icon}
              title={item.title}
              excerpt={item.description}
            />
          ))}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(FeatureSection);
