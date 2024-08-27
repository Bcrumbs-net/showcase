import React from 'react';
import { Box, Text, Heading } from '../../../../../../lib/atoms';
import { FeatureBlock } from '../../../../../../lib/molecules';
import FBPageSectionWrapper from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../utils/withModelToDataObjProp';
import FBPageScript from './FBPageScript';

const FBPageSection = ({
  row,
  col,
  textArea,
  buttonStyle,
  model,
  data,
  isAR,
  title,
  description,
}: {
  row: object;
  col: object;
  textArea: object;
  buttonStyle: object;
  model: GraphContent;
  data: Record<string, string>;
  isAR?: boolean;
  title: object;
  description: object;
}) => {
  return (
    <FBPageSectionWrapper id={model.name}>
      <Box className="row" {...row}>
        <Box className="col" {...col}>
          <Box {...textArea} style={{ textAlign: isAR ? 'right' : 'left' }}>
            <FeatureBlock
              title={<Heading content={data.sectionTitle} {...title} />}
              description={
                <Text content={data.sectionSubTitle} {...description} />
              }
              isAR={isAR}
            />
          </Box>
        </Box>
        <Box className="col" {...col}>
          <FBPageScript data={data} />
        </Box>
      </Box>
    </FBPageSectionWrapper>
  );
};

// VideoSection default style
FBPageSection.defaultProps = {
  // section header default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  col: {
    width: [1, '100%', '50%'],
    alignItems: 'center',
    flexBox: true,
    justifyContent: 'space-evenly',
  },
  textArea: {
    maxWidth: '490px',
    pr: '20px',
    justifyContent: 'flex-end',
  },
  // FB section title default style
  title: {
    fontSize: ['26px', '26px', '30px', '40px'],
    lineHeight: '1.5',
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // FB section description default style
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  // button default design
  buttonStyle: {
    variant: 'textButton',
    p: 0,
    color: '#ec4444',
    fontSize: '71px',
  },
};

export default withModelToDataObjProp(FBPageSection);
