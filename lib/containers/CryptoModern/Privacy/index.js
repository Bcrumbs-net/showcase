import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';

import SectionWrapper, { ContentWrapper } from './privacy.style';
import Illustration from '../../../assets/image/cryptoModern/illustration1.png';

const PrivacyPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="Privacy Preserving  Anonymous Funds  Protocol" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="image">
            <Fade up>
              <Image src={Illustration} alt="Illustration Image" />
            </Fade>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PrivacyPortal;
