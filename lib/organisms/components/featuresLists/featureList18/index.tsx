import React from 'react';
import Link from 'next/link';
import { Heading, Container, Box, Image, Text } from '../../../../atoms';
import BlockWrapper, {
  ContentWrapper,
  List,
  Item,
  ImageWrapper,
} from './style';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface PromotionBlockProps {
  row: object;
  col: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const PromotionBlock = ({
  row,
  col,
  model,
  isAR,
  data,
}: PromotionBlockProps) => {
  let promotionItems = [];
  if (model.children && model.children.length > 0) {
    promotionItems = model.children.map((promotionData, index) => {
      const promotionMap = convertDataModelToDataObject(
        promotionData
      ) as Record<string, string>;
      return promotionMap;
    });
  }

  return (
    <BlockWrapper id={model.name}>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <ContentWrapper>
              <Heading as="h5" content={data.slogan} />
              <Heading content={data.title} />
              <Text content={data.text1} />
              <Text content={data.text2} />
              <List>
                {promotionItems.map((item) => (
                  <Item key={`list_key${item.id}`}>{item.title}</Item>
                ))}
              </List>
              <Link href="{data.LearnMoreLabel}" className="learn__more-btn">

                <span className="hyphen" />
                <span className="btn_text">{data.LearnMoreLabel}</span>

              </Link>
            </ContentWrapper>
          </Box>
          <Box className="col" {...col}>
            <ImageWrapper>
              <Image src={data.image} alt="Charity Landing" />
            </ImageWrapper>
          </Box>
        </Box>
      </Container>
    </BlockWrapper>
  );
};

// PromotionBlock default style
PromotionBlock.defaultProps = {
  // PromotionBlock row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // PromotionBlock col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default withModelToDataObjProp(PromotionBlock);
