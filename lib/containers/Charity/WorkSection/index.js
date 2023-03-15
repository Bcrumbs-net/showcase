import React from 'react';
import { Box, Text, Heading, Image, Container, Button, Logo } from '../../../atoms';
import { BlogPost } from '../../../molecules';
import SectionWrapper, {
  SectionHeader,
  FeatureWrapper,
} from './workSection.style';

import { workData } from '../../../data/Charity';

const WorkSection = ({ model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let featuresItems = [];
  if (model.children && model.children.length > 0) {
    featuresItems = model.children.map((featurehData, index) => {
      let featurehMap = featurehData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return featurehMap;
    });
  }
  const { title, slogan, features } = workData;
  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <SectionHeader>
          <Heading content={data.title} />
          <Text content={data.slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {featuresItems.map(item => (
            <BlogPost
              key={`feature_key${item.id}`}
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

export default WorkSection;
