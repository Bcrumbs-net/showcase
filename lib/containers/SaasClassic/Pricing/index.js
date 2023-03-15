import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Text, Heading, Container, Button } from '../../../atoms';
import { GlideCarousel, GlideSlide} from '../../../molecules';
import {
  MONTHLY_PRICING_TABLE,
  YEARLY_PRICING_TABLE,
} from '../../../data/SaasClassic';

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  PricingTableWrapper,
} from './pricing.style';

const PricingSection = ({
  sectionWrapper,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonFillStyle,
  listContentStyle,
  model,
}) => {
  let dataMap = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

  const [state, setState] = useState({
    data: model.children.length > 0 ? model.children[0].name : null,
  });

  /*const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });*/

  const data = state.data;

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
    <Box {...sectionWrapper} id="pricing_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content={dataMap.title} />
          <Heading {...secHeading} content={dataMap.subtitle} />
          <PricingButtonWrapper>
            {model.children.map((item, index) => {
              let pricingTable = item.data.reduce(function(map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <Button
                  key={`PricingTabBtn${index}`}
                  title={pricingTable.name}
                  className={data === item.name ? 'active-item' : ''}
                  onClick={() => setState({ data: item.name })}
                />
              );
            })}
          </PricingButtonWrapper>
        </Box>
        <PricingTableWrapper>
          <GlideCarousel
            carouselSelector="pricing-carousel"
            options={pricingCarouselOptions}
            controls={false}
          >
            <>
              {model.children.find(m => m.name == data) &&
                model.children
                  .find(m => m.name == data)
                  .children.map((item, index) => {
                    let pricingTable = item.data.reduce(function(map, obj) {
                      map[obj.Key] = obj.Value;
                      return map;
                    }, {});
                    return (
                      <GlideSlide key={`pricing-table-${index}`}>
                        <PricingTable
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
                          <PricingList>
                            {item.children &&
                              item.children.map((subitem, subIndex) => {
                                let featureMap = subitem.data.reduce(function(
                                  map,
                                  obj
                                ) {
                                  map[obj.Key] = obj.Value;
                                  return map;
                                },
                                {});
                                return (
                                  <ListItem
                                    key={`pricing-table-list-${subIndex}`}
                                  >
                                    <Text
                                      content={featureMap.content}
                                      {...listContentStyle}
                                    />
                                  </ListItem>
                                );
                              })}
                          </PricingList>
                          <PricingButton>
                            <a href={pricingTable.url || '#'}>
                              <Button
                                title={pricingTable.buttonLabel}
                                {...buttonFillStyle}
                              />
                            </a>
                            {pricingTable.trialButtonLabel ? (
                              <a
                                href={pricingTable.trialURL || '#'}
                                className="trial_button"
                              >
                                {pricingTable.trialButtonLabel}
                              </a>
                            ) : (
                              ''
                            )}
                          </PricingButton>
                        </PricingTable>
                      </GlideSlide>
                    );
                  })}
            </>
          </GlideCarousel>
        </PricingTableWrapper>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '100px'],
    pb: '20px',
  },
  secTitleWrapper: {
    mb: ['30px', '40px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2eb582',
    mb: '12px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px', '36px', '36px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    ml: 'auto',
    mr: 'auto',
    lineHeight: '1.12',
    width: '500px',
    maxWidth: '100%',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '700',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: '#0f2137',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
    fontWeight: '500',
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: '#6e7379',
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
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '15px',
    fontWeight: '700',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    minWidth: ['160px', '190px'],
    maxWidth: '100%',
    height: '48px',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#6e7379',
    mb: '0',
  },
};

export default PricingSection;
