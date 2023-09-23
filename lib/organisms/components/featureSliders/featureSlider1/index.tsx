import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import FeatureSliderWrapper from './style';
import Image1 from '../../../../assets/image/app/slide-2.png';
import Image2 from '../../../../assets/image/app/slide-1.png';
import Image3 from '../../../../assets/image/app/slide-3.png';
import Image4 from '../../../../assets/image/app/slide-4.png';
import Image5 from '../../../../assets/image/app/slide-5.png';
import Thumb1 from '../../../../assets/image/app/6.svg';
import Thumb2 from '../../../../assets/image/app/1.svg';
import Thumb3 from '../../../../assets/image/app/2.svg';
import Thumb4 from '../../../../assets/image/app/3.svg';
import Thumb5 from '../../../../assets/image/app/4.svg';
import Thumb6 from '../../../../assets/image/app/5.svg';
import { Container, Box, Heading,Text } from '../../../../atoms';

// import DomainSection from '../container/Hosting/Domain';
const images = [
  {
    original: `${Image1}`,
    thumbnail: `${Thumb1}`,
    thumbnailLabel: 'Super Performance',
    originalAlt: 'slide one',
    thumbnailAlt: 'thumb one',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb2}`,
    thumbnailLabel: 'Search optimization',
    originalAlt: 'slide two',
    thumbnailAlt: 'thumb two',
  },
  {
    original: `${Image3}`,
    thumbnail: `${Thumb3}`,
    thumbnailLabel: 'Customer Support',
    originalAlt: 'slide three',
    thumbnailAlt: 'thumb three',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb4}`,
    thumbnailLabel: '100% response time',
    originalAlt: 'slide four',
    thumbnailAlt: 'thumb four',
  },
  {
    original: `${Image4}`,
    thumbnail: `${Thumb5}`,
    thumbnailLabel: 'Maintaining Milestones',
    originalAlt: 'slide five',
    thumbnailAlt: 'thumb five',
  },
  {
    original: `${Image5}`,
    thumbnail: `${Thumb6}`,
    thumbnailLabel: 'Organised Code',
    originalAlt: 'slide six',
    thumbnailAlt: 'thumb six',
  },
];

interface FeatureSliderProps {
  sectionHeader?: object;
  sectionTitle?: object;
  sectionSubTitle?:object;
  model: any;
}

const FeatureSlider = ({
  sectionSubTitle,
  sectionTitle,
  sectionHeader,
  model,
}:FeatureSliderProps) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let images = [];
  if (model.children && model.children.length > 0) {
    images = model.children.map((featureSlider, index) => {
      let sliderMap = featureSlider.data.reduce(function (map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return sliderMap;
    });
  }
  return (
    <FeatureSliderWrapper>
      <div className="FeatureSliderInner">
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} content={data.sectionHeader} />
          <Heading {...sectionTitle} content={data.sectionTitle} />
        </Box>
        <Box className="FeatureSlider">
          <ImageGallery
            items={images}
            className="Slider-img"
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={true}
          />
        </Box>
      </Container>
    </FeatureSliderWrapper>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'WHY CHOOSE US',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: 'Key Features of Our App',
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FeatureSlider;
