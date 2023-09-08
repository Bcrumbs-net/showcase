import { Fragment } from 'react';
import PropTypes, { string } from 'prop-types';
import TestimonialSectionWrapper, {
  TextWrapper,
  ImageWrapper,
} from './style';
import { Container, Box, Heading, Button,Image,Text } from '../../../../atoms';
import { GlideCarousel, GlideSlide } from '../../../../molecules';

interface TestimonialSectionProps {
  sectionHeader:object;
  sectionTitle:object;
  row: object;
  col: object;
  sectionSubTitle:object;
  btnWrapperStyle:object;
  commentStyle:object;
  nameStyle:object;
  btnStyle:object;
  designationStyle:object;
  testimonialUrl:object;
  model:any;

}
const TestimonialSection = ({
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  btnWrapperStyle,
  commentStyle,
  nameStyle,
  btnStyle,
  designationStyle,
  testimonialUrl,
  model,
}:TestimonialSectionProps) => {
  // Glide js options
  const glideOptions = {
    type: 'carousel',
    autoplay: 5000,
    perView: 1,
    animationDuration: 700,
  };
  const data = model.data.reduce(function (map, obj) {
    map[obj.Key]= obj.Value;
    return map;
  }, {});
  return (
    <TestimonialSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.sectionSubTitle} {...sectionSubTitle} />
          <Heading content={data.sectionTitle} {...sectionTitle} />
        </Box>
        <GlideCarousel
          options={glideOptions}
          buttonWrapperStyle={btnWrapperStyle}
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
              model.children.map((testimonial, index) => {
                let testimonialMap = testimonial.data.reduce(function (
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
                      <TextWrapper>
                        <i className="flaticon-quotes" />
                        <Text
                          content={testimonialMap.comment}
                          {...commentStyle}
                        />
                        <Heading content={testimonialMap.name} {...nameStyle} />
                        <Heading
                          content={testimonialMap.designation}
                          {...designationStyle}
                        />
                      </TextWrapper>
                      <ImageWrapper>
                        <a
                          href={testimonialMap.testimonialUrl}
                          {...testimonialUrl}
                        >
                          <Image
                            src={testimonialMap.avatar_url}
                            alt="Client Image"
                          />
                        </a>
                      </ImageWrapper>
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
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  btnWrapperStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  commentStyle: PropTypes.object,
  designationStyle: PropTypes.object,
};

// TestimonialSection default style
TestimonialSection.defaultProps = {
  // section header default style
  sectionHeader: {
    pt: '30px',
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
  // client comment style
  commentStyle: {
    color: '#343d48',
    fontWeight: '300',
    fontSize: ['20px', '24px'],
    lineHeight: '1.67',
    mb: '47px',
  },
  // client name style
  nameStyle: {
    as: 'h3',
    color: '#343d48',
    fontWeight: '500',
    fontSize: '18px',
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
