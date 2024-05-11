import React from 'react';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface TrialSectionProps {
  sectionWrapper: object;
  row: object;
  title: object;
  description: object;
  textArea: object;
  imageArea: object;
  ImageOne: object;
  btnStyle: object;
  outlineBtnStyle: object;
  buttonWrapper: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  buttonWrapper,
  model,
  data,
  isAR
}: TrialSectionProps) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={data.image} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <Heading
              {...title}
              content={data.title}
            />
            <Text
              {...description}
              content={data.description}
            />
            <Box {...buttonWrapper}>
              <Button title={data.ctaLabel} {...btnStyle} />
              <Button
                title={data.secCtaLabel}
                variant="textButton"
                {...outlineBtnStyle}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['0px', '0px', '0px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%'],
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
  },
  title: {
    fontSize: ['28px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: '#5c636c',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'secondaryWithBg',
    pl: ['15px', '30px'],
    pr: ['15px', '30px'],
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#0f2137',
    colors: 'secondary',
  },
};

export default withModelToDataObjProp(TrialSection);
