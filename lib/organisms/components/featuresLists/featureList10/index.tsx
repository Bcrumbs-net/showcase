import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Image, Container } from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import { BetaSectionWrapper, FeatureSection } from './style';
import withModelToDataObjProp, { convertDataModelToDataObject } from 'bootstrapers/showcase/utils/withModelToDataObjProp';

interface BetaSectionProps {
  row: object;
  title: object;
  description: object;
  sectionSubTitle: object;
  featureTitleStyle: object;
  featureDescriptionStyle: object;
  model: any;
  isAR: boolean;
  data: Record<string, string>;
}
const BetaSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
  model,
  isAR,
  data,
}: BetaSectionProps) => {
  return (
    <BetaSectionWrapper id={model.name}>
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading content={data.title} {...title} />}
            description={<Text content={data.header} {...description} />}
          />
        </Box>
        <Box className="BetaSection">
          <FeatureSection>
            {model.children?.map((item, index) => {
              const featureMap = convertDataModelToDataObject(item) as Record<string, string>;;
              return (
                <Fade up key={`feature-${index}`}>
                  <div className="featureWrapper">
                    <Image src={featureMap.image} alt={featureMap.title} />
                    <Box className="contextPortion">
                      <Heading
                        as="h3"
                        content={featureMap.title}
                        {...featureTitleStyle}
                      />
                      <Text content={featureMap.des} {...featureDescriptionStyle} />
                    </Box>
                  </div>
                </Fade>
              );
            })
            }
          </FeatureSection>
        </Box>
      </Container>
    </BetaSectionWrapper>
  );
};

// Trusted default style
BetaSection.defaultProps = {
  // Trusted section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  title: {
    content: 'Be the first to use our Beta!',
    fontSize: ['24px', '26px', '30px', '36px', '40px'],
    lineHeight: ['30px', '32px', '40px', '50px', '55px'],
    fontWeight: '700',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '20px',
    textAlign: ['center', 'center'],
  },

  description: {
    content: 'Become part of our ever growing community.',
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '28px',
    mb: ['25px', '25px', '30px', '30px', '45px'],
    textAlign: ['center', 'center'],
  },
  featureTitleStyle: {
    fontSize: ['18px', '18px', '20px', '20px', '20px'],
    lineHeight: ['1', '1', '1', '1', '1'],
    fontWeight: '500',
    color: '#32325d',
    letterSpacing: '-0.010em',
    mb: '10px',
    textAlign: ['left', 'left'],
  },
  // Trusted section description default style
  featureDescriptionStyle: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#525f7f',
    lineHeight: '27px',
    textAlign: ['left', 'left'],
  },
};

export default withModelToDataObjProp(BetaSection);
