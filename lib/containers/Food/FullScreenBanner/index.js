import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Heading, Container, Box } from '../../../atoms';
import BannerSectionWrapper, { ImageWrapper } from './bannerSection.style';
import { GlideCarousel, GlideSlide} from '../../../molecules';
import { Button } from "../../../atoms";
import { Image } from '../../../atoms';

const FullScreenBannerSection = ({ btnWrapperStyle, btnStyle, model }) => {
  // Glide js options
  const glideOptions = {
    type: 'slider',
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };
  return (
    <BannerSectionWrapper id={model.name}>
      <Container>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
          carouselSelector={`${model.name}-banner-slider`}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              aria-label="Next"
              variant="textButton"
              {...btnStyle}
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              aria-label="Prev"
              variant="textButton"
              {...btnStyle}
            />
          }
        >
          <Fragment>
            {model.children &&
              model.children.filter(m => m.online).map((testimonial, index) => {
                let sliderMap = testimonial.data.reduce(function(map, obj) {
                  map[obj.Key] = obj.Value;
                  return map;
                }, {});
                return (
                  <GlideSlide key={index}>
                    <ImageWrapper>
                      <a href={sliderMap.url}>
                        <Image src={sliderMap.image} alt="Slide Image" />
                      </a>
                    </ImageWrapper>
                  </GlideSlide>
                );
              })}
          </Fragment>
        </GlideCarousel>
      </Container>
    </BannerSectionWrapper>
  );
};

// VideoSection style props
FullScreenBannerSection.propTypes = {
  btnWrapperStyle: PropTypes.object,
  btnStyle: PropTypes.object,
};

// VideoSection default style
FullScreenBannerSection.defaultProps = {
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '-40px',
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '40px',
    fontSize: '36px',
    color: '#343d484d',
  },
};

export default FullScreenBannerSection;
