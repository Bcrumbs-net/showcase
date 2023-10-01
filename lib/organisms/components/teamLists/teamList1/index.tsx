import { Fragment } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
import { FaLinkedinIn } from 'react-icons/fa';
import TeamSectionWrapper, { SocialLinks } from './style';
import { Container, Box, Heading,Image,Text } from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface TeamSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  memberName?: any;
  memberPhoto?: object;
  designation?: object;
  contentStyle?: object;
  profileUrl?: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const TeamSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  memberName,
  memberPhoto,
  designation,
  contentStyle,
  profileUrl,
  model,
  isAR,
  data
}: TeamSectionProps) => {
  return (
    <TeamSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.title} {...sectionSubTitle} />
          <Heading content={data.subTitle} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children.map((team, index) => {
            const teamMap: Record<string, string> = team.data.reduce(function (map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return (
              <Box
                className="col"
                {...col}
                key={`team_key-${index}`}
                style={{ direction: isAR ? 'rtl' : 'ltr' }}
              >
                <FeatureBlock
                  id={`member-${index}`}
                  className="team__member"
                  isAR={isAR}
                  icon={
                    teamMap.profileUrl ? (
                      <a href={teamMap.profileUrl} {...profileUrl}>
                        <Image
                          src={teamMap.thumbnail_url}
                          {...profileUrl}
                          alt={`Team member photo ${teamMap.id}`}
                          className="member__photo"
                          {...memberPhoto}
                        />
                      </a>
                    ) : (
                      <Image
                        src={teamMap.thumbnail_url}
                        {...profileUrl}
                        alt={`Team member photo ${teamMap.id}`}
                        className="member__photo"
                        {...memberPhoto}
                      />
                    )
                  }
                  contentStyle={contentStyle}
                  title={
                    teamMap.profileUrl ? (
                      <Heading
                        content={teamMap.name}
                        {...memberName}
                        href={teamMap.profileUrl}
                        {...profileUrl}
                      />
                    ) : (
                      <Heading
                        content={teamMap.name}
                        {...memberName}
                        {...profileUrl}
                      />
                    )
                  }
                  description={
                    <Fragment>
                      <Text content={teamMap.designation} {...designation} />
                      <SocialLinks>
                        {team.children &&
                          team.children
                            .filter((m) => m.online)
                            .map((social, subIndex) => {
                              const socialMap: Record<string, string> = social.data.reduce(function (
                                map,
                                obj
                              ) {
                                map[obj.Key] = obj.Value;
                                return map;
                              },
                              {});
                              switch (socialMap.icon) {
                                case 'FaLinkedinIn':
                                  return (
                                    <a
                                      href={socialMap.link}
                                      key={`profile_id-${subIndex}`}
                                      className={socialMap.icon}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <FaLinkedinIn />
                                    </a>
                                  );
                                default:
                                  return socialMap.icon ? (
                                    <a
                                      href={socialMap.link}
                                      key={`profile_id-${subIndex}`}
                                      className={socialMap.icon}
                                      aria-label={socialMap.icon}
                                      target="_blank"
                                      rel="noreferrer"
                                    ></a>
                                  ) : (
                                    <a
                                      href={socialMap.link}
                                      key={`profile_id-${subIndex}`}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {' '}
                                      <img src={socialMap.image} />
                                    </a>
                                  );
                              }
                            })}
                      </SocialLinks>
                    </Fragment>
                  }
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </TeamSectionWrapper>
  );
};

// TeamSection default style
TeamSection.defaultProps = {
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
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // Team member content default style
  contentStyle: {
    textAlign: 'center',
    mt: '25px',
  },
  // Team member memberName default style
  memberName: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  memberPhoto: {
    width: '300px',
  },
  // Team member description default style
  designation: {
    fontSize: ['15px', '16px', '14px', '17px'],
    lineHeight: '1',
    color: 'rgba(15, 33, 55, 0.6)',
    mb: 0,
  },
};

export default withModelToDataObjProp(TeamSection);
