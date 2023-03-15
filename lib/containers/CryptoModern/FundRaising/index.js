import React from 'react';
//import Text from '../../../components/Text';
//import Heading from '../../../components/Heading';
//import Image from '../../../components/Image';
//

import { Text } from '../../../atoms';
import { Heading } from '../../../atoms';
import { Image } from '../../../atoms';
import Container from '../../../atoms/UI/Container';

import SectionWrapper, { ContentWrapper } from './fundRaising.style';
import FundGraphImg from '../../../assets/image/cryptoModern/fund-graph.png';
import GraphFeatureImg from '../../../assets/image/cryptoModern/graph-feature.png';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="fund">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={FundGraphImg} alt="Graph Image" />
          </div>
          <div className="content">
            <Heading content="Fund raising allocation" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ." />
            <Image src={GraphFeatureImg} alt="Graph Feature Image" />
          </div>
          <div className="gradientDiv"> </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
