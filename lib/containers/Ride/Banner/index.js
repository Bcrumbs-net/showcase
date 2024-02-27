import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Text, Heading, Image, Container, Button, Input } from '../../../atoms';
import Fade from 'react-reveal/Fade';
import { BannerWrapper, EmailInputWrapper } from './banner.style';

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  aboutStyle,
  greetingStyleTwo,
  button,
  model,
}) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <BannerWrapper
      id="banner_section"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <Container noGutter mobileGutter width="1200px" className="container">
        <Box {...row}>
          <Box {...contentArea} className="contentArea">
            <Heading content={data.title} {...greetingStyle} />
            <Heading content={data.subtitle} />
            <EmailInputWrapper>
              <Input
                inputType="email"
                placeholder="Enter Email Address"
                iconPosition="left"
                aria-label="email"
              />
              <Link href="#fare_section">
                <Button title="Text me a link" {...button} />
              </Link>
            </EmailInputWrapper>
            <Text content={data.appTitle} {...aboutStyle} />
            <Fade up>
              <div className="bannerImageBtn">
                <Link href={data.appleStoreUrl || '#'}>
                  <Image
                    src={data.appleStoreImg}
                    className="app_image_area"
                    alt="App Image"
                  />
                </Link>
                <Link href={data.androidStoreUrl || '#'}>
                  <Image
                    src={data.androidStoreImg}
                    className="play_image_area"
                    alt="GooglePlay Image"
                  />
                </Link>
              </div>
            </Fade>
          </Box>
          <Box {...imageArea} className="image_area">
            <Image
              src={data.image1}
              className="man_image_area"
              alt="Man Image"
            />

            <Image
              src={data.background}
              className="car_image_area"
              alt="Car Image"
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
  greetingStyleTwo: PropTypes.object,
  button: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '50%'],
    p: [
      '150px 0 0px 0',
      '150px 0 0px 0',
      '150px 0 0px 0',
      '150px 0 0px 0',
      '100px 0 0px 0',
    ],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '50%'],
    flexBox: true,
    alignItems: 'flex-end',
    position: 'relative',
  },
  greetingStyle: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['30px', '36px', '48px', '52px', '72px'],
    fontWeight: '600',
    fontFamily: 'Poppins',
    lineHeight: ['40px', '48px', '60px', '65px', '98px'],
    mb: '0px',
  },
  greetingStyleTwo: {
    as: 'h1',
    color: '#15172c',
    fontSize: ['30px', '36px', '48px', '60px', '72px'],
    fontWeight: '400',
    fontFamily: 'Poppins',
    lineHeight: ['40px', '48px', '60px', '72px', '98px'],
    mb: '8px',
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
    fontFamily: 'Lato',
    fontWeight: '400',
    color: '#15172c',
    lineHeight: '1.5',
    mb: '30px',
    mt: '30px',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '55px',
    pt: '0px',
    pb: '0',
  },
};

export default BannerSection;
