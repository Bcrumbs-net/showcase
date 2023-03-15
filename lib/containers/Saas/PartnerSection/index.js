import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';

import PartnerSectionWrapper from './partner.style';
import Partner from '../../../assets/image/saas/partner.png';

const PartnerSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let CustomPartnerSectionWrapper;
  if (data.backgroundColor) {
    CustomPartnerSectionWrapper = styled(PartnerSectionWrapper)`
      background-color: ${data.backgroundColor};
    `;
  } else {
    CustomPartnerSectionWrapper = PartnerSectionWrapper;
  }
  return (
    <CustomPartnerSectionWrapper id={model.name}>
      <Container>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Image src={data.image} alt="Domain Image" />
          </Box>
          <Box {...col} {...textArea}>
            <Heading {...title} content={data.title} />
            <Text {...description} content={data.description} />
            <Box>
              {data.url && data.button_label ? (
                <a href={data.url}>
                  <Button {...button} title={data.button_label} />
                </a>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Container>
    </CustomPartnerSectionWrapper>
  );
};

PartnerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
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
    lineHeight: '1.5',
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
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default PartnerSection;
