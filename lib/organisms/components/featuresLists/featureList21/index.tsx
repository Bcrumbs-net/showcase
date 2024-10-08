import React from 'react';
import { Box, Text, Heading, Image, Container } from '../../../../atoms';
import ProcessItem, { ProcessIndex } from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, { convertDataModelToDataObject } from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface WorkingProcessSectionProps {
  sectionWrapper: object;
  secTitleWrapper: object;
  secText: object;
  secHeading: object;
  processRow: object;
  processCol: object;
  processImageStyle: object;
  processTitleStyle: object;
  processDescriptionStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const WorkingProcessSection = ({
  sectionWrapper,
  secTitleWrapper,
  secText,
  secHeading,
  processRow,
  processCol,
  processImageStyle,
  processTitleStyle,
  processDescriptionStyle,
  model,
  isAR,
  data
}: WorkingProcessSectionProps) => {
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
    <Box {...sectionWrapper} as="section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading
            {...secHeading}
            content={data.subTitle}
          />
        </Box>

        <Box {...processRow}>
          {featuresItems.map((item, index) => (
            <Box
              {...processCol}
              key={`process-item-${index}`}
              className="process_item_col"
            >
              <ProcessItem className="process_item">
                <ProcessIndex>{item.index || index + 1}</ProcessIndex>
                <Image
                  src={item.image}
                  alt={`process-image-${index + 1}`}
                  {...processImageStyle}
                />
                <Heading as="h3" content={item.title} {...processTitleStyle} />
                <Text content={item.description} {...processDescriptionStyle} />
              </ProcessItem>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};


WorkingProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '15px', '15px', '15px', '15px'],
    pb: 0,
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
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-20px', '-35px', '-45px'],
    mr: ['0', '-15px', '-20px', '-35px', '-45px'],
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '20px', '35px', '45px'],
    pr: ['0', '15px', '20px', '35px', '45px'],
    mb: '40px',
  },
  processImageStyle: {
    mb: '35px',
    width: ['60px', '60px', '70px', 'auto'],
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.02em',
    mb: ['20px', '20px', '22px', '22px', '22px'],
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '15px', '15px'],
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.87',
  },
};

export default withModelToDataObjProp(WorkingProcessSection);
