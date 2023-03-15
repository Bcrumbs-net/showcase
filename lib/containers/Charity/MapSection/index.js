import React from 'react';
import { Image, Container, Text, Heading } from '../../../atoms';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

// import mapImage from '../../../assets/image/charity/map.png';

const MapSection = ({ model }) => {
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

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

export default MapSection;
