import React from 'react';
import Link from 'next/link';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import PartnerSectionWrapper from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface PartnerSectionProps {
  row: object;
  col: object;
  title: object;
  description: object;
  button: object;
  textArea: object;
  imageArea: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  model,
  data,
  isAR
}: PartnerSectionProps) => {
  return (
    <PartnerSectionWrapper>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={data.image} alt="Domain Image" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content={data.title}
            />
            <Text
              {...description}
              content={data.description}
            />
            <Box>
              <Link href={data.ctaLink}>

                <Button {...button} title={data.ctaLabel} />

              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </PartnerSectionWrapper>
  );
};


PartnerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '42%'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '58%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['26px', '30px', '30px', '48px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '15px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default withModelToDataObjProp(PartnerSection);
