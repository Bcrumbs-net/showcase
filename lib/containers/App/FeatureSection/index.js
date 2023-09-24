import PropTypes from 'prop-types';
import { Box, Text, Heading, Container } from '../../../atoms';
import { FeatureBlock } from '../../../molecules';
import FeatureSectionWrapper from './featureSection.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
  model,
}) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let featureItems = [];
  if (model.children && model.children.length > 0) {
    featureItems = model.children.map((featureData, index) => {
      let featureMap = featureData.data.reduce(function (map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return featureMap;
    });
  }
  return (
    <FeatureSectionWrapper id="services">
      <Container>
        <Box {...sectionHeader}>
          <Heading {...sectionSubTitle} content={data.sectionTitle} />
          <Text {...sectionTitle} content={data.sectionSubTitle} />
        </Box>
        <Box className="row" {...row}>
          {featureItems.map((feature, index) => (
            <Box className="col" {...col} key={'FeatureSection' + index}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
              />
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['30px', '30px', '30px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    content: 'OUR SERVICES',
    as: 'span',
    display: 'block',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
    textAlign: ['center'],
  },
  // section title default style
  sectionTitle: {
    content: 'Featured Service that We Provide',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    textAlign: ['center'],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['20px', '20px', '20px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    border: '1px solid rgba(36, 74, 117,0.1)',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.75',
    color: '#343d48',
  },
};

export default FeatureSection;