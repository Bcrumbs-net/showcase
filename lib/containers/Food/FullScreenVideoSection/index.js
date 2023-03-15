import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Image, Container, Button, Logo } from '../../../atoms';
import VideoSectionWrapper from './videoSection.style';

const FullScreenVideoSection = ({ sectionHeader, sectionTitle, model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <VideoSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.title} {...sectionTitle} />
        </Box>
        <Box className="full-screen-video-container">
          <video
            controls
            playsInline
            className="full-screen-video"
            width="100%"
            preload="auto"
            loop=""
            autoPlay=""
            poster={data.videoImage}
            muted
          >
            <source src={data.videoUrl} type="video/mp4" />
            <source src={data.videoUrl} type="video/webm" />
            <source src={data.videoUrl} type="video/ogg" />
          </video>
        </Box>
      </Container>
    </VideoSectionWrapper>
  );
};

// VideoSection style props
FullScreenVideoSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
};

// VideoSection default style
FullScreenVideoSection.defaultProps = {
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

export default FullScreenVideoSection;
