import PropTypes from 'prop-types';
import { Box, Container } from '../../../../atoms';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import SliderDes from '../../sliders/descriptions/descrirtion1';

interface TestimonialSectionProps {
  sectionWrapper:object;
  title:object;
  row:object;
  sectionSubTitle:object;
  model:any;
}
const TestimonialSection = ({
  sectionWrapper,
  row,
  sectionSubTitle,
  model,
}:TestimonialSectionProps) => {
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let testimonialLst = [];
  if (model.children && model.children.length > 0) {
    testimonialLst = model.children.map((testimonialData, index) => {
      let testimonialMap = testimonialData.data.reduce(function(map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});

      return {
        thumbnail: `${testimonialMap.thumbnail}`,
        thumbnailAlt: testimonialMap.thumbnailAlt,
        description: (
          <SliderDes
            data={{
              description: testimonialMap.description,
              designation: testimonialMap.designation,
              name: testimonialMap.name,
              id: testimonialMap._id,
            }}
          />
        ),
      };
    });
  }
  return (
    <Box
      {...sectionWrapper}
      className="testimonialSlider"
      id="testimonialSection"
    >
      <Container>
        <Box className="testimonialDesWrapper">
          <ImageGallery
            items={testimonialLst}
            originalClass="Testimonial-img"
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </Box>
      </Container>
    </Box>
  );
};

TestimonialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  title: PropTypes.object,
};

TestimonialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: '0px',
    pb: ['20px', '80px', '0px', '80px', '80px'],
  },

  sectionSubTitle: {
    content: 'CLIENT TESTIMONIAL',
    as: 'span',
    display: 'block',
    textAlign: [ 'left'],
    fontSize: '14px',
    letterSpacing: '0.11em',
    fontWeight: '700',
    color: '#1a73e8',
    textTransform: 'uppercase',
    mb: '10px',
  },
};

export default TestimonialSection;
