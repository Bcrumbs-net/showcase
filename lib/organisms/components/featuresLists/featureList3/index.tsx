import { GraphContent } from '@bcrumbs.net/bc-api';
import { Container, Box, Heading ,Text} from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import FeatureSectionWrapper from './style';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
interface FeatureSectionProps {
  sectionHeader?: object;
  row?: object;
  col?: object;
  sectionTitle?: object;
  sectionSubTitle?: object;
  featureTitle?: object;
  featureDescription?: object;
  iconStyle: object;
  imgStyle: object;
  contentStyle: object;
  blockWrapperStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  imgStyle,
  contentStyle,
  blockWrapperStyle,
  model,
  isAR,
}: FeatureSectionProps) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <FeatureSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Text content={data.title} {...sectionSubTitle} />
          <Heading content={data.subTitle} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {model.children &&
            model.children.map((feature, index) => {
              let subData = feature.data.reduce(function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <Box className="col" {...col} key={`feature-${index}`}>
                  <FeatureBlock
                    isAR={isAR}
                    icon={subData.icon ? <i className={subData.icon} /> : null}
                    image={
                      subData.image ? (
                        <img src={subData.image} width="100" />
                      ) : null
                    }
                    wrapperStyle={blockWrapperStyle}
                    iconStyle={subData.icon ? iconStyle : imgStyle}
                    contentStyle={contentStyle}
                    title={
                      <Heading content={subData.title} {...featureTitle} />
                    }
                    description={
                      <Text
                        content={subData.description}
                        {...featureDescription}
                      />
                    }
                  />
                </Box>
              );
            })}
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '56px'],
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
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: '1px solid #f1f4f6',
    borderBottom: '1px solid #f1f4f6',
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '30px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '84px',
    height: '84px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '36px',
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
  },
  imgStyle: {
    width: '80px',
    height: '80px',
    m: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    mb: '30px',
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
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d48cc',
  },
};

export default withModelToDataObjProp(FeatureSection);
