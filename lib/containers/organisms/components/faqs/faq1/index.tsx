import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Container } from '../../../../../atoms';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
  IconWrapperAR,
} from '../../../../../molecules';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './style';

interface IFaqSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  titleStyle: any;
  descriptionStyle: any;
  model: any;
  isAR: boolean;
}
const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  model,
  isAR,
}: IFaqSectionProps) => {
  const data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <FaqSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.sectionSubTitle} {...sectionSubTitle} />
          <Heading content={data.sectionTitle} {...sectionTitle} />
        </Box>
        <Box className="row">
          <Accordion>
            <Fragment>
              {model.children &&
                model.children.map((faqSection, index) => {
                  let faqSectionMap = faqSection.data.reduce(function (
                    map,
                    obj
                  ) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {});
                  return (
                    <AccordionItem key={`accordion_key-${index}`}>
                      <Fragment>
                        <AccordionTitle>
                          {isAR ? (
                            <Fragment>
                              <IconWrapperAR>
                                <OpenIcon>
                                  <Icon icon={minus} size={18} />
                                </OpenIcon>
                                <CloseIcon>
                                  <Icon icon={plus} size={18} />
                                </CloseIcon>
                              </IconWrapperAR>
                              <Heading
                                content={faqSectionMap.title}
                                {...titleStyle}
                                style={{
                                  textAlign: isAR ? 'right' : 'left',
                                  direction: isAR ? 'rtl' : 'ltr',
                                }}
                              />
                            </Fragment>
                          ) : (
                            <Fragment>
                              <Heading
                                content={faqSectionMap.title}
                                {...titleStyle}
                              />
                              <IconWrapper>
                                <OpenIcon>
                                  <Icon icon={minus} size={18} />
                                </OpenIcon>
                                <CloseIcon>
                                  <Icon icon={plus} size={18} />
                                </CloseIcon>
                              </IconWrapper>
                            </Fragment>
                          )}
                        </AccordionTitle>
                        <AccordionBody>
                          <Text
                            content={faqSectionMap.description}
                            {...descriptionStyle}
                            style={{
                              textAlign: isAR ? 'right' : 'left',
                              direction: isAR ? 'rtl' : 'ltr',
                            }}
                          />
                        </AccordionBody>
                      </Fragment>
                    </AccordionItem>
                  );
                })}
            </Fragment>
          </Accordion>
        </Box>
      </Container>
    </FaqSectionWrapper>
  );
};

// FaqSection style props
FaqSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    //color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    //color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion title default style
  titleStyle: {
    fontSize: ['16px', '19px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // accordion description default style
  descriptionStyle: {
    fontSize: '15px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
};

export default FaqSection;
