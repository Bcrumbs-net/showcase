import React from "react";
import { Image, Container, Text, Heading } from "../../../../atoms";
import SectionWrapper, { SectionHeader, ImageWrapper } from "./style";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface MapSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const MapSection = ({ model, isAR, data }: MapSectionProps) => {
  return (
    <SectionWrapper id={model.name}>
      <Container width="1200px">
        <SectionHeader>
          <Heading content={data.title} />
          <Text content={data.subTitle} />
        </SectionHeader>
        <ImageWrapper>
          <Image src={data.image} alt="Charity Landing" />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(MapSection);
