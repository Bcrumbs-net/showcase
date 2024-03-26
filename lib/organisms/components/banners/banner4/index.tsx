import React from 'react';
import styled from 'styled-components';
import Icon from 'react-icons-kit';
import BannerWrapper from './style';
import { PortfolioLink } from './style';
import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';
import { Text, Image, Container, Box, Heading } from '../../../../atoms';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { BannerDataType } from '../../../types/bannerTypes';

interface BannerSectionProps {
  row: object;
  contentArea: object;
  imageArea: object;
  greetingStyle: object;
  nameStyle: object;
  designationStyle: object;
  aboutStyle: object;
  roleStyle: object;
  roleWrapper: object;
  textAfterLink: object;
  model: GraphContent;
  isAR: boolean;
  data: BannerDataType;
}
const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
  textAfterLink,
  model,
  isAR,
  data,
}: BannerSectionProps) => {
  let CustomBannerWrapper;
  if (data.backgroundImage) {
    CustomBannerWrapper = styled(BannerWrapper)`
      background-image: url(${data.backgroundImage});
      background-repeat: no-repeat;
      background-size: cover;
    `;
  } else if (data.backgroundColor) {
    CustomBannerWrapper = styled(BannerWrapper)`
      background-color: ${data.backgroundColor};
    `;
  } else {
    CustomBannerWrapper = BannerWrapper;
  }
  return (
    <CustomBannerWrapper id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            {data.welcomeMessage ? (
              <Heading content={data.welcomeMessage} {...greetingStyle} />
            ) : null}
            {data.name ? <Heading content={data.name} {...nameStyle} /> : null}
            {data.subTitle ? (
              <Heading content={data.subTitle} {...designationStyle} />
            ) : null}
            {data.title ? (
              <Box {...roleWrapper}>
                <Icon
                  icon={cornerDownRight}
                  style={{ color: '#3444f1' }}
                  size={22}
                />
                <Heading content={data.title} {...roleStyle} />
              </Box>
            ) : null}
            {data.description ? (
              <Text content={data.description} {...aboutStyle} />
            ) : null}
            {data.ctaUrl ? (
              <PortfolioLink>
                <a target="_blank" href={data.ctaUrl || '#'} rel="noreferrer">
                  {data.ctaLabel}
                  <Text content={data.ctaDescription} {...textAfterLink} />
                </a>{' '}
              </PortfolioLink>
            ) : null}
            {/*<SocialProfile items={SOCIAL_PROFILES} model={model} />*/}
          </Box>
          <Box {...imageArea} className="image_area">
            {data.image ? (
              <Image src={data.image} alt={data.name} />
            ) : (
              <span></span>
            )}
          </Box>
        </Box>
      </Container>
    </CustomBannerWrapper>
  );
};


BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '80px 0 60px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '10px',
    textAlign: 'justify',
  },
  textAfterLink: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
    display: 'inline',
  },
};

export default withModelToDataObjProp(BannerSection);
