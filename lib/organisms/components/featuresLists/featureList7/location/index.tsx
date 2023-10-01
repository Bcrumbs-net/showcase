import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Image, Container, Button} from '../../../../../atoms';
import LocationSectionWrapper from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FullScreenLocationSectionProps{
  sectionHeader:object; 
  sectionTitle:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const FullScreenLocationSection = ({ 
  sectionHeader, 
  sectionTitle, 
  model,
  data
}:FullScreenLocationSectionProps) => {
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

export default withModelToDataObjProp(FullScreenLocationSection);
