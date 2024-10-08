import React from 'react';
import { Box, Container } from '../../../../atoms';
import { Text } from '../../../../atoms';
import { Heading } from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import { Image } from '../../../../atoms';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, { convertDataModelToDataObject } from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FeatureSectionProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  row: object;
  col: object;
  FeatureItemStyle: object;
  iconStyle: object;
  contentStyle: object;
  featureTitle: object;
  featureDescription: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FeatureSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  row,
  col,
  FeatureItemStyle,
  iconStyle,
  contentStyle,
  featureTitle,
  featureDescription,
  model,
  data,
  isAR
}: FeatureSectionProps) => {
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
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subTitle} />
        </Box>

        <Box {...row}>
          {featuresItems.map((item, index) => (
            <Box {...col} key={`feature-item-${index}`}>
              <FeatureBlock
                icon={
                  <Image
                    src={`${item.icon}`}
                    alt={`feature-item-icon-${index + 1}`}
                  />
                }
                wrapperStyle={FeatureItemStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                iconPosition="left"
                title={<Heading content={item.title} {...featureTitle} />}
                description={
                  <Text content={item.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};


FeatureSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['20px', '50px', '60px', '70px', '100px'],
  },
  secTitleWrapper: {
    mb: ['60px', '100px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-30px', '-30px', '-30px', '-30px', '-30px'],
    mr: ['-30px', '-30px', '-30px', '-30px', '-45px'],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pl: ['30px', '30px', '30px', '30px', '45px'],
    pr: ['30px', '30px', '30px', '30px', '45px'],
    mb: ['50px', '70px'],
  },
  FeatureItemStyle: {
    alignItems: 'center',
  },
  iconStyle: {
    width: ['90px', '90px', '90px', '75px', '90px'],
    pr: '20px',
  },
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    lineHeight: '1.5',
    mb: ['10px', '15px'],
  },
  featureDescription: {
    fontSize: '15px',
    fontWeight: '400',
    color: '#5d646d',
    letterSpacing: '-0.025em',
    lineHeight: '1.88',
    mb: 0,
  },
};

export default withModelToDataObjProp(FeatureSection);
