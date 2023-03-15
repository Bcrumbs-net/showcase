import React from 'react';
import { Box, Text, Heading, Image, Container, Button, Logo } from '../../../atoms';
import { BlogPost } from '../../../molecules';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './featureSection.style';

import { featureData } from '../../../data/Charity';

const FeatureSection = ({ model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let featureItems = [];
  if (model.children && model.children.length > 0) {
    featureItems = model.children.map((featureData, index) => {
      let featureMap = featureData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
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
          {featureItems.map(item => (
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

export default FeatureSection;
