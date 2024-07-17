import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import { Box, Text, Heading, Container } from '../../../atoms';
import { FeatureBlock } from '../../../molecules';
import { FEATURES_DATA } from '../../../data/Hosting/data';
import ShapeOne from './images/shape-1.svg';
import ShapeTwo from './images/shape-2.svg';
import ShapeThree from './images/shape-3.svg';
import ShapeFour from './images/shape-4.svg';
import ShapeFive from './images/shape-5.svg';

export const FeatureItem = styled(FeatureBlock)`
  position: relative;
  padding: 50px 30px;
  border: 1px solid #f2f4f7;
  border-radius: 5px;
  background-color: #fff;
  transition: 0.35s ease-in-out;
  @media (max-width: 768px) and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media (max-width: 575px) {
    padding: 40px 25px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: linear-gradient(
      138deg,
      rgb(249, 212, 35) 0%,
      rgb(255, 78, 80) 100%
    );
    transition: 0.35s ease-in-out;
  }

  & > div {
    position: relative;
  }

  h2,
  p {
    transition: 0.35s ease-in-out;
  }

  .hover-shape {
    width: 20px;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 0;
    pointer-events: none;
    transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: rotate(260deg);
  }

  .hover-shape-1 {
    left: 0;
    top: 20px;
  }

  .hover-shape-2 {
    right: 29%;
    top: 0;
  }

  .hover-shape-3 {
    right: 0;
    bottom: 35%;
  }

  .hover-shape-4 {
    right: 30%;
    bottom: 0;
  }

  .hover-shape-5 {
    left: 0;
    bottom: 30%;
  }

  .icon__wrapper {
    margin-bottom: 40px;
    @media (max-width: 768px) and (min-width: 768px) {
      margin-bottom: 30px;
    }
    @media (max-width: 575px) {
      margin-bottom: 25px;
    }
    i {
      line-height: 1;
      font-size: 65px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 50px;
      }
      &.violate {
        color: #8569ff;
      }
      &.yellow {
        color: #ffb129;
      }
      &.green {
        color: #18d379;
      }
    }
  }

  .button__wrapper {
    a {
      color: #c2cbd6;
      font-size: 24px;
      transition: 0.35s ease-in-out;
      @media (max-width: 768px) and (min-width: 768px) {
        font-size: 20px;
      }
      @media (max-width: 575px) {
        font-size: 22px;
      }
    }
  }

  &:hover {
    background-color: #eb4d4b;
    &:before {
      opacity: 0.37;
    }

    .hover-shape-1 {
      left: -40px;
      top: 20px;
    }
    .hover-shape-2 {
      right: 29%;
      top: -47px;
    }
    .hover-shape-3 {
      right: -27px;
      bottom: 35%;
    }
    .hover-shape-4 {
      right: 30%;
      bottom: -60px;
    }
    .hover-shape-5 {
      left: -35px;
      bottom: 30%;
    }
    .hover-shape {
      transform: rotate(0);
      opacity: 1;
    }

    h2,
    p {
      color: #fff;
    }

    .icon__wrapper {
      i {
        color: #fff;
      }
    }

    .button__wrapper {
      a {
        color: #fff;
      }
    }
  }
`;

const FeatureSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  featureItemHeading,
  featureItemDes,
}) => {
  return (
    <Box {...sectionWrapper}>
      <Container>
        <Box {...secTitleWrapper}>
          <Fade bottom cascade>
            <Text {...secText} content="OUR SERVICES" />
            <Heading
              {...secHeading}
              content="Our Featured Service that We Provide"
            />
          </Fade>
        </Box>

        <Box {...row}>
          {FEATURES_DATA.map((featureItem, index) => (
            <Box {...col} key={`feature-${index}`}>
              {featureItem.animation ? (
                <Fade bottom delay={index * 120}>
                  <FeatureItem
                    title={
                      <Heading
                        {...featureItemHeading}
                        content={featureItem.title}
                      />
                    }
                    description={
                      <Text
                        {...featureItemDes}
                        content={featureItem.description}
                      />
                    }
                    icon={<i className={featureItem.icon} />}
                    additionalContent={
                      <>
                        <img
                          className="hover-shape-1 hover-shape"
                          src={ShapeOne}
                          alt="Shape One"
                        />
                        <img
                          className="hover-shape-2 hover-shape"
                          src={ShapeTwo}
                          alt="Shape Two"
                        />
                        <img
                          className="hover-shape-3 hover-shape"
                          src={ShapeThree}
                          alt="Shape Three"
                        />
                        <img
                          className="hover-shape-4 hover-shape"
                          src={ShapeFour}
                          alt="Shape Four"
                        />
                        <img
                          className="hover-shape-5 hover-shape"
                          src={ShapeFive}
                          alt="Shape Five"
                        />
                      </>
                    }
                    button={
                      <Link href="#" aria-label={`link-${index}`}>

                        <i className="flaticon-next" />

                      </Link>
                    }
                  />
                </Fade>
              ) : (
                <FeatureItem
                  title={
                    <Heading
                      {...featureItemHeading}
                      content={featureItem.title}
                    />
                  }
                  description={
                    <Text
                      {...featureItemDes}
                      content={featureItem.description}
                    />
                  }
                  icon={<i className={featureItem.icon} />}
                  additionalContent={
                    <>
                      <img
                        className="hover-shape-1 hover-shape"
                        src={ShapeOne}
                        alt="Shape One"
                      />
                      <img
                        className="hover-shape-2 hover-shape"
                        src={ShapeTwo}
                        alt="Shape Two"
                      />
                      <img
                        className="hover-shape-3 hover-shape"
                        src={ShapeThree}
                        alt="Shape Three"
                      />
                      <img
                        className="hover-shape-4 hover-shape"
                        src={ShapeFour}
                        alt="Shape Four"
                      />
                      <img
                        className="hover-shape-5 hover-shape"
                        src={ShapeFive}
                        alt="Shape Five"
                      />
                    </>
                  }
                  button={
                    <Link href="#" aria-label={`link-${index}`}>

                      <i className="flaticon-next" />

                    </Link>
                  }
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

FeatureSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  featureItemHeading: PropTypes.object,
  featureItemDes: PropTypes.object,
};

FeatureSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '80px', '80px'],
    id: 'feature_section',
  },
  secTitleWrapper: {
    mb: ['50px', '60px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#eb4d4b',
    mb: '10px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  col: {
    className: 'col',
    width: [1, 1 / 2, 1 / 3, 1 / 3],
    pr: '15px',
    pl: '15px',
    mb: '30px',
  },
  featureItemHeading: {
    fontSize: ['18px', '18px', '16px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '10px'],
    letterSpacing: '-0.020em',
    maxWidth: ['auto', 'auto', 'auto', '180px'],
  },
  featureItemDes: {
    fontSize: ['14px', '14px', '14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48cc',
    mb: ['20px', '20px', '20px', '20px'],
  },
};

export default FeatureSection;
