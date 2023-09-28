import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import {
  TimelineWrapper,
  TimelineItem,
  TimelineIndex,
  TimelineContent,
  TimelineDot,
  Hidden,
} from './style';
import { Timeline } from '../../../../data/Saas';
import Illustration from '../../../assets/image/saas/illustration.png';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface TimelineSectionProps {
  sectionWrapper:object;
  sectionHeader:object;
  sectionTitle:object;
  sectionSubTitle:object;
  row:object;
  col:object;
  button:object;
  textArea:object;
  imageArea:object;
  imageTwo:object;
  buttonWrapper:object;
  indexStyle:object;
  timelineTitle:object;
  timelineDescription:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const TimelineSection = ({
  sectionWrapper,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  row,
  col,
  button,
  textArea,
  imageArea,
  imageTwo,
  buttonWrapper,
  indexStyle,
  timelineTitle,
  timelineDescription,
  model,
  isAR,
  data,
}:TimelineSectionProps) => {
  return (
    <Box {...sectionWrapper} id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={data.title} />
          <Heading {...sectionTitle} content={data.subTitle} />
        </Box>
        <Box {...row}>
          <Box {...col} {...imageArea}>
            <Fade bottom>
              <Image {...imageTwo} src={data.image} alt="Illustration" />
            </Fade>
          </Box>
          <Box {...col} {...textArea}>
            <TimelineWrapper>
              {model.children &&
                model.children.map((item, index) => {
                  let subDataMap = item.data.reduce(function(map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});
                  return (
                    <TimelineItem key={`timeline-item-${index}`}>
                      <TimelineIndex>
                        <Hidden>
                          <Slide bottom>
                            <Text
                              as="span"
                              content={`0${index + 1}`}
                              {...indexStyle}
                            />
                          </Slide>
                        </Hidden>
                      </TimelineIndex>
                      <TimelineContent>
                        <Hidden>
                          <Slide bottom delay={100}>
                            <Heading
                              as="h2"
                              content={subDataMap.title}
                              {...timelineTitle}
                            />
                          </Slide>
                        </Hidden>
                        <Hidden>
                          <Slide bottom delay={200}>
                            <Text
                              content={subDataMap.description}
                              {...timelineDescription}
                            />
                          </Slide>
                        </Hidden>
                      </TimelineContent>
                      <TimelineDot />
                    </TimelineItem>
                  );
                })}
            </TimelineWrapper>
          </Box>
        </Box>
        <Box {...buttonWrapper}>
          <a href={data.url}>
            <Button {...button} title="HIRE FOR PROJECT" />
          </a>
        </Box>
      </Container>
    </Box>
  );
};

TimelineSection.propTypes = {
  sectionWrapper: PropTypes.object,
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageTwo: PropTypes.object,
  buttonWrapper: PropTypes.object,
  indexStyle: PropTypes.object,
  timelineTitle: PropTypes.object,
  timelineDescription: PropTypes.object,
};

TimelineSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
  }, // section header default style
  sectionHeader: {
    mb: '56px',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#5268db',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  imageAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '55%', '50%', '55%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  imageArea: {
    width: ['100%', '100%', '45%', '50%', '45%'],
    mb: ['30px', '40px', '40px', '0', '0'],
  },
  title: {
    fontSize: ['30px', '38px', '38px', '48px', '48px'],
    fontWeight: '300',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '15px',
  },
  description: {
    fontSize: '16px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: '33px',
  },
  buttonWrapper: {
    mt: ['25px', '50px'],
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    height: '46px',
  },
  imageOne: {
    mb: '40px',
    ml: 'auto',
    mr: 'auto',
  },
  imageTwo: {
    ml: 'auto',
    mr: 'auto',
  },
  indexStyle: {
    fontSize: ['36px', '42px', '52px', '56px', '72px'],
    fontWeight: '300',
    color: '#eaebec',
    display: 'block',
    lineHeight: '1',
    mb: '0',
  },
  timelineTitle: {
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '13px',
  },
  timelineDescription: {
    fontSize: ['14px', '15px', '15px', '15px', '16px'],
    lineHeight: '2',
    color: '#5d646d',
    mb: '0',
  },
};

export default withModelToDataObjProp(TimelineSection);
