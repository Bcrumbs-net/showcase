import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';
import { BlogPost } from '../../../molecules';

import { SectionHeader } from '../../../../bootstrapers/showcase/templates/interior/globalStyle';
import SectionWrapper, { FeatureWrapper } from './feature.style';

import { featureData } from '../../../data/Interior/';

const Feature = () => {
  const { title, slogan, features } = featureData;

  return (
    <SectionWrapper id="feature">
      <Fade bottom>
        <SectionHeader>
          <Heading as="h5" content={title} />
          <Heading content={slogan} />
        </SectionHeader>
      </Fade>
      <Container width="1360px">
        <Fade bottom delay={30}>
          <FeatureWrapper>
            {features.map(item => (
              <BlogPost
                key={`feature_key${item.id}`}
                thumbUrl={item.icon}
                title={item.title}
                excerpt={item.description}
              />
            ))}
          </FeatureWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Feature;
