import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './style';
import { Text,Image, Container, Box, Heading, Button } from '../../../../atoms';
import { Accordion,AccordionItem,AccordionTitle, IconWrapper, OpenIcon, CloseIcon, AccordionBody } from '../../../../molecules';
import { Faq } from '../../../../data/Saas';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface FaqSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  buttonWrapper?: object;
  button?: object;
  titleStyle: any;
  descriptionStyle: any;
  model: GraphContent;
  data: Record<string, string>;
}
const FaqSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  titleStyle,
  descriptionStyle,
  buttonWrapper,
  button,
  model,
  data,
}:FaqSectionProps) => {
  return (
    <FaqSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={data.title} />
          <Heading {...sectionTitle} content={data.subTitle} />
        </Box>
        <Box className="row">
          <Accordion>
            <Fragment>
              {model.children &&
                model.children.map((faqSection, index) => {
                  let faqSectionMap = faqSection.data.reduce(function(
                    map,
                    obj
                  ) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {});
                  return (
                    <AccordionItem
                      key={index}
                      //@ts-ignore
                      expanded={faqSectionMap.expend == 'True'}
                    >
                      <Fragment>
                        <AccordionTitle>
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
                        </AccordionTitle>
                        <AccordionBody>
                          <Text
                            content={faqSectionMap.description}
                            {...descriptionStyle}
                          />
                        </AccordionBody>
                      </Fragment>
                    </AccordionItem>
                  );
                })}
            </Fragment>
          </Accordion>
          <Box {...buttonWrapper}>
            <a href={data.url}>
              <Button {...button} />
            </a>
          </Box>
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
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    content: 'FREQUENTLY ASKED QUESTIONS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '5px',
  },
  // section title default style
  sectionTitle: {
    content: 'Want to ask something about us ?',
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
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
    color: '#5d646d',
    lineHeight: '1.75',
    mb: '0',
    fontWeight: '400',
  },
  buttonWrapper: {
    mt: `${11}`,
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    title: 'EXPLORE FORUM',
    type: 'button',
    fontSize: `${2}`,
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primary',
    height: `${4}`,
  },
};

export default withModelToDataObjProp(FaqSection);
