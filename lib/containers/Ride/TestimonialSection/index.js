import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Box, Container } from '../../../atoms';
import { Text } from '../../../atoms';
import { Heading } from '../../../atoms';
import { Button } from "../../../atoms";
import { Image } from '../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../molecules';
import QuoteImage from './quote.svg';
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
  RoundWrapper,
  ClientName,
} from './testimonialSection.style';

const TestimonialSection = ({
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
  secTitleWrapper,
  secTitle,
  secDescription,
  model,
}) => {
  // Glide js options
  const glideOptions = {
    type: 'carousel',
    autoplay: 5000,
    animationDuration: 700,
    perView: 1,
  };
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <TestimonialSectionWrapper id="testimonial_section">
      <Container noGutter mobileGutter width="1200px" className="container">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.secTitle} />
          <Text {...secDescription} content={data.secDescription} />
        </Box>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
          nextButton={
            <Button
              icon={<i className="flaticon-next" />}
              variant="textButton"
              aria-label="next"
              {...btnStyle}
            />
          }
          prevButton={
            <Button
              icon={<i className="flaticon-left-arrow" />}
              variant="textButton"
              aria-label="prev"
              {...btnStyle}
            />
          }
        >
          <Fragment>
            {model.children?.map((testimonialSection, index) => {
              let testimonialItems = testimonialSection.data.reduce(function(
                map,
                obj
              ) {
                map[obj.Key] = obj.Value;
                return map;
              },
              {});
              return (
                <GlideSlide key={index}>
                  <Fragment>
                    <ImageWrapper>
                      <RoundWrapper>
                        <Image
                          src={testimonialItems.avatar_url}
                          alt="Client Image"
                        />
                      </RoundWrapper>
                    </ImageWrapper>
                    <TextWrapper>
                      <Text
                        content={testimonialItems.comment}
                        {...commentStyle}
                      />
                      <div className="quote_image_area">
                        <Image src={QuoteImage} alt="Quote Image" />
                      </div>
                      <ClientName>
                        <Heading
                          content={testimonialItems.name}
                          {...nameStyle}
                        />
                        <Heading
                          content={testimonialItems.designation}
                          {...designationStyle}
                        />
                      </ClientName>
                    </TextWrapper>
                  </Fragment>
                </GlideSlide>
              );
            })}
          </Fragment>
        </GlideCarousel>
      </Container>
    </TestimonialSectionWrapper>
  );
};

// TestimonialSection style props
TestimonialSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,

  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  commentStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
};

// TestimonialSection default style
TestimonialSection.defaultProps = {
  // sub section default style
  secTitleWrapper: {
    mb: ['60px', '60px', '60px', '60px', '60px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '300px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    fontFamily: 'Lato',
  },
  // client comment style
  commentStyle: {
    color: '#0f2137',
    fontWeight: '400',
    fontSize: ['22px', '22px', '22px', '30px'],
    lineHeight: '1.72',
    mb: '47px',
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
  },
  // client designation style
  designationStyle: {
    as: 'h5',
    color: 'rgba(52, 61, 72, 0.8)',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '30px',
    mb: 0,
    ml: ['0', '10px'],
  },
  // glide slider nav controls style
  btnWrapperStyle: {
    position: 'absolute',
    bottom: '62px',
    left: '12px',
  },
  // next / prev btn style
  btnStyle: {
    minWidth: 'auto',
    minHeight: 'auto',
    mr: '13px',
    fontSize: '16px',
    color: '#343d484d',
  },
};

export default TestimonialSection;
