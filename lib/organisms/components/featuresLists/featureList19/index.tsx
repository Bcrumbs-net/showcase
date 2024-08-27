import React from 'react';
import { Text, Heading, Container } from '../../../../atoms';
import { BlogPost } from '../../../../molecules';
import SectionWrapper, { SectionHeader, FeatureWrapper } from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface WorkSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const WorkSection = ({ model, isAR, data }: WorkSectionProps) => {
  let featuresItems;
  if (model.children && model.children.length > 0) {
    featuresItems = model.children.map((featurehData, index) => {
      const featurehMap = convertDataModelToDataObject(featurehData) as Record<
        string,
        string
      >;
      return featurehMap;
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
          {featuresItems.map((item) => (
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

export default withModelToDataObjProp(WorkSection);
