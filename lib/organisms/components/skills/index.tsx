import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import { Icon } from 'react-icons-kit';
import { Box, Text, Heading, Image, Container } from '../../../atoms';
import {
  SkillItem,
  SkillDetails,
  SkillProgress,
  SuccessRate,
  ProgressBar,
  SkillIcon,
  SkillAbout,
  PortfolioLink,
} from './style';
import { SKILLS } from '../../../data/Portfolio/data';
import { ic_thumb_up } from 'react-icons-kit/md/ic_thumb_up';
import withModelToDataObjProp from '../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface SkillSectionProps{
  sectionWrapper:object;
  secTitleWrapper:object;
  secTitle:object;
  secDescription:object;
  row:object;
  col:object;
  skillTitle:object;
  skillDescription:object;
  skillSuccessRate:object;
  successRateText:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const SkillSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  row,
  col,
  skillTitle,
  skillDescription,
  skillSuccessRate,
  successRateText,
  model,
  isAR,
  data
}:SkillSectionProps) => {
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.subtitle} />
        </Box>

        <Box {...row}>
          {model.children &&
            model.children.map((itemObj, index) => {
              let item = itemObj.data.reduce(function(map, obj) {
                map[obj.Key] = obj.Value;
                console.log('item',map.successRate
                )
                return map;
              }, {});
              return (
                <Box {...col} key={`skill-item-${index}`}>
                  <SkillItem>
                    <SkillDetails>
                      {item.icon ? (
                        <SkillIcon>
                          <Image
                            src={item.icon}
                            alt={`skill-icon-${index + 1}`}
                          />
                        </SkillIcon>
                      ) : null}
                      <SkillAbout>
                        <Heading content={item.title} {...skillTitle} />
                        <Text content={item.subtitle} {...skillDescription} />
                      </SkillAbout>
                    </SkillDetails>
                    <SkillProgress>
                      <SuccessRate>
                        {item.successRate ? (
                          <>
                            <Icon
                              icon={ic_thumb_up}
                              size={12}
                              className="skill_success_icon"
                            />
                            <Text
                              as="span"
                              content={`${item.successRate}% `}
                              {...skillSuccessRate}
                            />
                          </>
                        ) : null}
                        {item.successLabel ? (
                          <Text
                            as="span"
                            content={item.successLabel}
                            {...skillSuccessRate}
                            {...successRateText}
                          />
                        ) : null}
                      </SuccessRate>
                      {item.successRate ? (
                        <ProgressBar>
                          <Line
                            percent={item.successRate}
                            strokeWidth={1.8}
                            trailWidth={1.8}
                            strokeColor="#3444f1"
                            trailColor="#e3e7f2"
                          />
                        </ProgressBar>
                      ) : null}
                      {item.link ? (
                        <PortfolioLink>
                          <a target="_blank" href={item.link || '#'} rel="noreferrer">
                            {item.linkText}
                          </a>
                        </PortfolioLink>
                      ) : null}
                    </SkillProgress>
                  </SkillItem>
                </Box>
              );
            })}
        </Box>
      </Container>
    </Box>
  );
};

SkillSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  skillTitle: PropTypes.object,
  skillDescription: PropTypes.object,
  skillSuccessRate: PropTypes.object,
  successRateText: PropTypes.object,
};

SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ['50px', '50px', '50px', '50px', '50px'],
    pb: ['30px', '60px', '60px', '80px', '80px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px'],
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px'],
  },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px',
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0',
  },
  successRateText: {
    ml: '.3em',
    display: 'inline-block',
  },
};

export default withModelToDataObjProp(SkillSection);
