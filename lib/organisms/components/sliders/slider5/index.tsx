import React from "react";
import { Logo } from "../../../../molecules";
import SectionWrapper, { ImageSlider, ImageSlide } from "./style";
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface ClientBlockProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const ClientBlock = ({ model, isAR, data }: ClientBlockProps) => {
  let clientItems = [];
  if (model.children && model.children.length > 0) {
    clientItems = model.children.map((clientData) => {
      const clientMap = convertDataModelToDataObject(clientData) as Record<string, string>;
      return clientMap;
    });
  }
  return (
    <SectionWrapper id={model.name}>
      <ImageSlider>
        <ImageSlide>
          {clientItems.map((item) => (
            <Logo
              key={`slide1__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
        <ImageSlide>
          {clientItems.map((item) => (
            <Logo
              key={`slide2__key${item.id}`}
              href={item.link}
              logoSrc={item.logo}
              title={item.name}
            />
          ))}
        </ImageSlide>
      </ImageSlider>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(ClientBlock);
