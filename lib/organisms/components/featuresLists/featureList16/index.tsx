import React from 'react';
import { Text, Heading, Container } from '../../../../atoms';
import { BlogPost } from '../../../../molecules';
import SectionWrapper, { SectionHeader, FeatureWrapper } from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FeatureSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FeatureSection = ({ model, isAR, data }: FeatureSectionProps) => {
  return (
    <SectionWrapper id={model.name}>
      <Container width="1260px">
        <SectionHeader>
          <Heading content={data.title} />
          <Text content={data.slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {model.children.map((featureData, index) => {
            const featureMap = convertDataModelToDataObject(
              featureData
            ) as Record<string, string>;
            return (
              <BlogPost
                key={`option_key${featureMap.id}`}
                thumbUrl={featureMap.icon}
                title={featureMap.title}
                excerpt={featureMap.description}
              />
            );
          })}
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default withModelToDataObjProp(FeatureSection);
