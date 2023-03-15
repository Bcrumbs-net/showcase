import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Image, Container, Button, Logo } from '../../../atoms';
import LocationSectionWrapper from './locationSection.style';

const FullScreenLocationSection = ({ sectionHeader, sectionTitle, model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <LocationSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.title} {...sectionTitle} />
        </Box>
        <Box className="full-screen-location-container">
          <iframe
            width="100%"
            height="450"
            frameBorder="0"
            src={data.mapUrl}
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </LocationSectionWrapper>
  );
};

// VideoSection style props
FullScreenLocationSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
};

// VideoSection default style
FullScreenLocationSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['20px', '36px'],
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['35px', '45px', '55px', '65px'],
    fontWeight: '400',
    //color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FullScreenLocationSection;
