import React from 'react';
import { Image, Container, Heading, Text } from '../../../atoms';
import SectionWrapper, { ContentWrapper } from './investment.style';
import GraphImg from '../../../assets/image/cryptoModern/graph.png';
import dummyImg from '../../../assets/image/cryptoModern/pattern.png';

const InvestmentPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="Total Investment sale from last year transaction" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="image">
            <Image src={GraphImg} alt="Graph Image" />
          </div>
        </ContentWrapper>
      </Container>
      <Image className="patternImg" src={dummyImg} alt="pattern Image" />
    </SectionWrapper>
  );
};

export default InvestmentPortal;
