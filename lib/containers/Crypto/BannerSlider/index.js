import React from 'react';
import PropTypes from 'prop-types';
import { Image, Heading, Text, Box, Container } from '../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../molecules';
import TestimonialSecWrapper, {
  ImageWrapper,
  TestimonialItem,
  BgImageWrapper,
} from './bannerSlider.style';

import { TESTIMONIALS } from '../../../data/Crypto';

const TestimonialSection = ({
  secTitleWrapper,
  secText,
  secHeading,
  reviewStyle,
  TestimonialMeta,
  nameStyle,
  designationStyle,
  arrowStyle,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    autoplay: 3000,
    perView: 1,
    animationDuration: 600,
  };
  return (
    <TestimonialSecWrapper id="testimonial_section">
      <Container>
        <div style={{ width: '440px' }}>
          <GlideCarousel
            options={carouselOptions}
            bullets={true}
            numberOfBullets={4}
            controls={false}
          >
            <>
              {model.children.map((testimonial, index) => {
                let testimonialMap = testimonial.data.reduce(function(
                  map,
                  obj
                ) {
                  map[obj.Key] = obj.Value;
                  return map;
                },
                {});
                return (
                  <GlideSlide key={`testimonial-slide-${index}`}>
                    <TestimonialItem className="testimonial_item">
                      <Text content={testimonialMap.review} {...reviewStyle} />
                      <Box {...TestimonialMeta}>
                        <ImageWrapper>
                          <Image
                            src={testimonialMap.avatar}
                            alt={`reviewer-image-${index}`}
                          />
                        </ImageWrapper>
                        <Box>
                          <Heading
                            content={testimonialMap.name}
                            {...nameStyle}
                          />
                          <Text
                            content={testimonialMap.designation}
                            {...designationStyle}
                          />
                        </Box>
                      </Box>
                    </TestimonialItem>
                  </GlideSlide>
                );
              })}
            </>
          </GlideCarousel>
        </div>
      </Container>
    </TestimonialSecWrapper>
  );
};

TestimonialSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  reviewStyle: PropTypes.object,
  TestimonialMeta: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  arrowStyle: PropTypes.object,
};

TestimonialSection.defaultProps = {
  secTitleWrapper: {
    mb: ['40px', '40px', '50px', '75px'],
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
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  reviewStyle: {
    fontSize: ['16px', '16px', '16px', '16px', '16px'],
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    lineHeight: '1.74',
    mb: ['30px', '30px', '30px', '30px', '40px'],
  },
  TestimonialMeta: {
    flexBox: true,
    alignItems: 'center',
  },
  nameStyle: {
    as: 'h3',
    fontSize: ['16px', '17px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: 'rgb(50, 50, 93)',
    mb: '5px',
    fontFamily: 'Poppins',
  },
  designationStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: 'rgb(82, 95, 127)',
    mb: '0',
    fontFamily: 'Poppins',
  },
};

export default TestimonialSection;
