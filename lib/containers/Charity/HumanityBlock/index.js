import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Heading, Text, Image, Box, Container } from '../../../atoms';

import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './humanityBlock.style';

import { humanityData } from '../../../data/Charity';

const HumanityBlock = ({ row, col, model }) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let humanityItems = [];
  if (model.children && model.children.length > 0) {
    humanityItems = model.children.map(humanityData => {
      let humanityMap = humanityData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return humanityMap;
    });
  }

  //const { slogan, title, text, lists, image } = humanityData;
  return (
    <BlockWrapper id={model.name}>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={data.image} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={data.slogan} />
              <Heading content={data.title} />
              <Text content={data.text} />
              <List>
                {humanityItems.map(item => (
                  <Item key={`list_key${item.id}`}>{item.text}</Item>
                ))}
              </List>
              <Link href="{data.LearnMoreUrl}">
                <a className="learn__more-btn">
                  <span className="hyphen" />
                  <span className="btn_text">{data.LearnMoreLabel} </span>
                </a>
              </Link>
            </ContentWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// HumanityBlock style props
HumanityBlock.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
};

// HumanityBlock default style
HumanityBlock.defaultProps = {
  // HumanityBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // HumanityBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default HumanityBlock;
