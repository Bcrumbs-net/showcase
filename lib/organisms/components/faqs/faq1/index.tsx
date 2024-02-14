import { Fragment } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
import { Box, Text, Heading, Container } from '../../../../atoms';
import { Accordion, AccordionItem } from 'react-accessible-accordion';
import {
  AccordionTitle,
  IconWrapperAR,
  OpenIcon,
  CloseIcon,
  IconWrapper,
  AccordionBody,
} from '../../../../molecules';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';
import FaqSectionWrapper from './style';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { FaqDataType } from '../../../types/faqTypes';

interface IFaqSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  title?: object;
  subTitle?: object;
  titleStyle: any;
  descriptionStyle: any;
  model: GraphContent;
  isAR: boolean;
  data: FaqDataType;
}
const FaqSection = ({
  row,
  sectionHeader,
  title,
  subTitle,
  titleStyle,
  descriptionStyle,
  model,
  isAR,
  data
}: IFaqSectionProps) => {
  return (
    <FaqSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.subTitle} {...subTitle} />
          <Heading content={data.title} {...title} />
        </Box>
        <Box className="row" {...row}>
          <Accordion className='reusecore__accordion'>
            <Fragment>
              {data.subdata &&
                 data.subdata.map((faqSectionMap, index) => {
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
                                className="titleStyle"
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


// FaqSection default style
FaqSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
  },
  // sub section default style
  subTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#10ac84',
    mb: '10px',
  },
  // section title default style
  title: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    // color: '#0f2137',
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

export default withModelToDataObjProp(FaqSection);
