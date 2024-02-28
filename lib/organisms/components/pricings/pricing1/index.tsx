import React, { useState, useEffect } from 'react';
import Icon from 'react-icons-kit';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../../molecules';
import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
} from './style';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import withModelToDataObjProp, { convertDataModelToDataObject } from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface PricingSectionProps {
  row: object;
  col: object;
  sectionWrapper: object;
  secTitleWrapper: object;
  secHeading: object;
  secText: object;
  nameStyle: object;
  descriptionStyle: object;
  priceStyle: object;
  priceLabelStyle: object;
  buttonStyle: object;
  btnStyle: object;
  buttonFillStyle: object;
  listContentStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const PricingSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle,
  model,
  isAR,
  data,
}: PricingSectionProps) => {
  const [state, setState] = useState({
    data: model.children.length > 0 ? model.children[0].name : null,
  });
  /*const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });*/

  const data1 = state.data;

  const pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        type: 'carousel',
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 160,
          after: 160,
        },
      },
      767: {
        type: 'carousel',
        perView: 1,
        peek: {
          before: 80,
          after: 80,
        },
      },
      575: {
        type: 'carousel',
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20,
        },
      },
    },
  };

  return (
    <Box {...sectionWrapper} id={model.name}>
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={data.title} />
          <Heading {...secHeading} content={data.subtitle} />
          <PricingButtonWrapper>
            {model.children.map((item, index) => {
              const pricingTable = convertDataModelToDataObject(item)
              return (
                <Button
                  key={`PricingTabBtn${index}`}
                  title={pricingTable.title}
                  className={data1 === item.name ? 'active-item' : ''}
                  onClick={() => setState({ data: item.name })}
                />
              );
            })}
          </PricingButtonWrapper>
        </Box>
        <Box {...row}>
          <GlideCarousel
            carouselSelector="pricing-carousel"
            options={pricingCarouselOptions}
            controls={false}
          >
            <>
              {model.children.find(m => m.name == data1) &&
                model.children
                  .find(m => m.name == data1)
                  .children.map((item, index) => {
                    const pricingTable = convertDataModelToDataObject(item)
                    return (
                      //@ts-ignore
                      <GlideSlide key={`pricing-table-${index}`}>
                        <PricingTable
                          //@ts-ignore
                          freePlan={pricingTable.freePlan}
                          className="pricing_table"
                        >
                          <PricingHead>
                            <Heading
                              content={pricingTable.name}
                              {...nameStyle}
                            />
                            <Text
                              content={pricingTable.description}
                              {...descriptionStyle}
                            />
                          </PricingHead>
                          <PricingPrice>
                            <Text
                              content={pricingTable.price}
                              {...priceStyle}
                            />
                            <Text
                              content={pricingTable.priceLabel}
                              {...priceLabelStyle}
                            />
                          </PricingPrice>
                          <PricingButton>
                            <a href={pricingTable.url}>
                              {pricingTable.freePlan ? (
                                <Button
                                  title={pricingTable.buttonLabel}
                                  {...buttonStyle}
                                />
                              ) : (
                                <Button
                                  title={pricingTable.buttonLabel}
                                  {...buttonFillStyle}
                                />
                              )}
                            </a>
                          </PricingButton>
                          <PricingList>
                            {item.children &&
                              item.children.map((subitem, subIndex) => {
                                const featureMap = convertDataModelToDataObject(subitem)
                                return (
                                  <ListItem
                                    key={`pricing-table-list-${subIndex}`}
                                  >
                                    <Icon
                                      icon={checkmark}
                                      className="price_list_icon"
                                      size={13}
                                    />
                                    <Text
                                      content={featureMap.title}
                                      {...listContentStyle}
                                    />
                                  </ListItem>
                                );
                              })}
                          </PricingList>
                        </PricingTable>
                      </GlideSlide>
                    );
                  })}
            </>
          </GlideCarousel>
        </Box>
      </Container>
    </Box>
  );
};



PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '120px'],
    pb: ['20px', '20px', '20px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  secTitleWrapper: {
    mb: ['50px', '75px'],
  },
  secText: {
    content: 'PRICING PLAN',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  secHeading: {
    content: 'What’s our monthly pricing subscription',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0',
  },
};

export default withModelToDataObjProp(PricingSection);
