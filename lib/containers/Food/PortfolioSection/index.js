import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '../../../atoms';
import { Text } from '../../../atoms';
import { Heading } from '../../../atoms';
import { Link } from '../../../atoms';
import { Image } from '../../../atoms';
import { FeatureBlock } from '../../../molecules';

import PortfolioSectionWrapper from './portfolioSection.style';

const PortfolioSection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  blogTitle,
  blogMeta,
  contentStyle,
  model,
}) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <PortfolioSectionWrapper
      id={model.name}
      xlRowCount={data.xlRowCount}
      lgRowCount={data.lgRowCount}
      mdRowCount={data.mdRowCount}
      smRowCount={data.smRowCount}
      xsRowCount={data.xsRowCount}
      xlItemHeight={data.xlItemHeight}
      lgItemHeight={data.lgItemHeight}
      mdItemHeight={data.mdItemHeight}
      smItemHeight={data.smItemHeight}
      xsItemHeight={data.xsItemHeight}
    >
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.title} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children.filter(m => m.online).map((blogSection, index) => {
            let postMap = blogSection.data.reduce(function (map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return (
              <FeatureBlock
                key={`post_key-${index}`}
                id={`post_id-${postMap.id}`}
                className="blog__post"
                icon={
                  <Image
                    src={postMap.image}
                    alt={`Blog Image ${postMap.id}`}
                    className="blog__image"
                  />
                }
                contentStyle={contentStyle}
                title={
                  <Heading
                    content={postMap.title}
                    href={postMap.url}
                    {...blogTitle}
                  />
                }
                onClick={() => {
                  document.location.href = postMap.url;
                }}
              />
            );
          })}
        </Box>
      </Container>
    </PortfolioSectionWrapper>
  );
};

// BlogSection style props
PortfolioSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  blogTitle: PropTypes.object,
  blogMeta: PropTypes.object,
  contentStyle: PropTypes.object,
};

// BlogSection default style
PortfolioSection.defaultProps = {
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
  // Blog post row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-12px',
    mr: '-12px',
  },
  // Blog post title default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px',
  },
  blogTitle: {
    fontSize: ['24px', '28px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Blog post description default style
  blogMeta: {
    fontSize: '16px',
    lineHeight: '1',
    color: 'rgba(255, 255, 255, 0.5)',
    mb: 0,
  },
};

export default PortfolioSection;
