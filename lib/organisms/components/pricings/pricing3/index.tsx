import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { Box, Text, Heading, Button, Container } from '../../../../atoms';
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
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface PricingSectionProps {
  sectionWrapper: object;
  row: object;
  secTitleWrapper: object;
  secHeading: object;
  secText: object;
  nameStyle: object;
  descriptionStyle: object;
  priceStyle: object;
  priceLabelStyle: object;
  buttonStyle: object;
  buttonFillStyle: object;
  listContentStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const PricingSection = ({
  sectionWrapper,
  row,
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
  data,
  isAR
}: PricingSectionProps) => {
  const [state, setState] = useState({
    data: model.children.length > 0 ? model.children[0].name : null,
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setLoading(true);
    }, 500);
  });

  const stateData = state.data;
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
          <Heading
            {...secHeading}
            content={data.description}
          />
          <PricingButtonWrapper>
            {model.children.map((item, index) => {
              const pricingTable: Record<string, string> = item.data.reduce(
                function (map, obj) {
                  map[obj.Key] = obj.Value;
                  return map;
                },
                {}
              );
              return (
                <Button
                  key={`PricingTabBtn${index}`}
                  title={pricingTable.name}
                  className={stateData === item.name ? "active-item" : ""}
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
              {model.children.find((m) => m.name == stateData) &&
                model.children
                  .find((m) => m.name == stateData)
                  .children.map((item, index) => {
                    const pricingTable: Record<string, string> =
                      item.data.reduce(function (map, obj) {
                        map[obj.Key] = obj.Value;
                        return map;
                      }, {});
                    return (
                      // @ts-ignore
                      <GlideSlide key={`pricing-table-${index}`}>
                        <PricingTable
                          freePlan={pricingTable.freePlan}
                          className="pricing_table"
                        >
                          <PricingHead>
                            <Heading content={pricingTable.name} {...nameStyle} />
                            <Text
                              content={pricingTable.description}
                              {...descriptionStyle}
                            />
                          </PricingHead>
                          <PricingPrice>
                            <Text content={pricingTable.price} {...priceStyle} />
                            <Text
                              content={pricingTable.priceLabel}
                              {...priceLabelStyle}
                            />
                          </PricingPrice>
                          <PricingList>
                            {item.children &&
                              item.children.map((subitem, subIndex) => {
                                const featureMap: Record<string, string> =
                                  subitem.data.reduce(function (map, obj) {
                                    map[obj.Key] = obj.Value;
                                    return map;
                                  }, {});
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
                            <Link href={pricingTable.url}>

                              {pricingTable.freePlan ? (
                                <Button
                                  title={pricingTable.ctaLabel}
                                  {...buttonStyle}
                                />
                              ) : (
                                <Button
                                  title={pricingTable.ctaLabel}
                                  {...buttonFillStyle}
                                />
                              )}

                            </Link>
                          </PricingButton>
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
    pt: ['100px', '100px', '100px', '140px', '160px'],
    pb: ['60px', '80px', '80px', '100px'],
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
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
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
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
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
