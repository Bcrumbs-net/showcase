import React from 'react';
import Markdown from 'react-markdown';
import { GraphContent } from '@bcrumbs.net/bc-api';
import { Box, Text, Heading } from '../../../../../../lib/atoms';
import { FeatureBlock } from '../../../../../../lib/molecules';
import withModelToDataObjProp from '../../../../utils/withModelToDataObjProp';
import MarkdownPageSectionWrapper from './style';

const MarkdownSection = ({
  row,
  model,
  data,
  isAR,
  title,
  description,
}: {
  row: object;
  col: object;
  textArea: object;
  model: GraphContent;
  data: Record<string, string>;
  isAR?: boolean;
  title: object;
  description: object;
}) => {
  return (
    <MarkdownPageSectionWrapper id={model.name}>
      <Box className="row" {...row}>
        <Box style={{ textAlign: isAR ? 'right' : 'left' }}>
          <FeatureBlock
            title={<Heading content={data.sectionTitle} {...title} />}
            description={
              <Text content={data.sectionSubTitle} {...description} />
            }
            isAR={isAR}
          />
        </Box>
      </Box>
      <Box className="row" {...row}>
        <Markdown>
          {data.content}
        </Markdown>
      </Box>
    </MarkdownPageSectionWrapper>
  );
};

// VideoSection default style
MarkdownSection.defaultProps = {
  // section header default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
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
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
};

export default withModelToDataObjProp(MarkdownSection);
