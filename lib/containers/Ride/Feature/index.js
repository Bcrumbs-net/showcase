import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '../../../atoms';
import { Text } from '../../../atoms';
import { Heading } from '../../../atoms';
import Fade from 'react-reveal/Fade';
import { FeatureBlock } from '../../../molecules';
import { Features } from '../../../data/Ride';

import FeatureSectionWrapper from './feature.style';

const FeatureSection = ({
  row,
  col,
  secTitleWrapper,
  secTitle,
  secDescription,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <FeatureSectionWrapper id="feature_section">
      <Container noGutter mobileGutter width="1200px" className="container">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children.map((feature, index) => {
            let featureMap = feature.data.reduce(function(map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});

            return (
              <Box {...col} className="col" key={`feature-item-${index}`}>
                <Fade up>
                  <FeatureBlock
                    icon={
                      featureMap.img ? (
                        <img src={featureMap.img} alt={featureMap.title} />
                      ) : (
                        <i className={featureMap.icon} />
                      )
                    }
                    wrapperStyle={blockWrapperStyle}
                    iconStyle={iconStyle}
                    contentStyle={contentStyle}
                    title={
                      <Heading content={featureMap.title} {...featureTitle} />
                    }
                    description={
                      <Text
                        content={featureMap.description}
                        {...featureDescription}
                      />
                    }
                    className="saasFeature"
                  />
                </Fade>
              </Box>
            );
          })}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '90px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },
  // feature icon default style

  // feature content default style
  contentStyle: {
    textAlign: 'center',
    mt: ['30px', '30px'],
  },
  // feature title default style
  featureTitle: {
    fontSize: ['15px', '16px'],
    lineHeight: '1.5',
    fontWeight: '600',
    color: '#15172C',
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  // feature description default style
  featureDescription: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['15px', '15px', '15px', '15px', '15px'],
    maxWidth: ['100%', '100%', '100%', '270px', '270px'],
    textAlign: ['center', 'center'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
};

export default FeatureSection;
