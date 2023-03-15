import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Text, Heading, Container, Button } from '../../../atoms';
import { FeatureBlock } from '../../../molecules';
import { LatestNews } from '../../../data/Ride';

import FeatureSectionWrapper from './latest.style';

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
  btnStyle,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <FeatureSectionWrapper id="news_section">
      <Container noGutter mobileGutter className="container">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.secTitle} />
          <Text {...secDescription} content={data.secDescription} />
        </Box>
        <Box className="row" {...row}>
          {model.children.map((lastNewsSection, index) => {
            let lastNewsMap = lastNewsSection.data.reduce(function(map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return (
              <Box className="col" {...col} key={index}>
                <FeatureBlock
                  icon={<img src={lastNewsMap.img} alt={lastNewsMap.title} />}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={
                    <Heading content={lastNewsMap.title} {...featureTitle} />
                  }
                  description={
                    <Text
                      content={lastNewsMap.description}
                      {...featureDescription}
                    />
                  }
                  button={
                    <Link href={lastNewsMap.btnUrl}>
                      <a>
                        <Button title={lastNewsMap.buttonText} {...btnStyle} />
                      </a>
                    </Link>
                  }
                  className="rideLatest"
                />
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
  btnStyle: PropTypes.object,
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
    width: [1, 1 / 2, 1 / 2, 1 / 2],
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: ['30px', '30px'],
  },
  // feature title default style
  featureTitle: {
    fontSize: ['15px', '16px'],
    lineHeight: '1.5',
    fontWeight: '600',
    color: '#15172C',
    textAlign: 'left',
    fontFamily: 'Poppins',
    mb: '0px',
  },
  // feature description default style
  featureDescription: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['7px', '7px', '7px', '7px', '7px'],
    mb: ['7px', '7px', '7px', '7px', '7px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  btnStyle: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    fontSize: ['15px', '16px'],
    fontWeight: '700',
    color: '#1A73E8',
    fontFamily: 'Lato',
  },
};

export default FeatureSection;
