import React from 'react';
import Fade from 'react-reveal/Fade';
import { Box, Text, Heading, Image, Container } from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import { BETA_FEATURE } from '../../../../data/Crypto/index.json';
import { BetaSectionWrapper, FeatureSection } from './style';

interface BetaSectionProps {
  row: object;
  title: object;
  description: object;
  sectionSubTitle: object;
  featureTitleStyle: object;
  featureDescriptionStyle: object;
  model: any;
}
const BetaSection = ({
  row,
  title,
  description,
  sectionSubTitle,
  featureTitleStyle,
  featureDescriptionStyle,
  model,
}: BetaSectionProps) => {
  return (
    <BetaSectionWrapper id={model.name}>
      <Container noGutter mobileGutter>
        <Box className="row" {...row}>
          <FeatureBlock
            title={<Heading {...title} />}
            description={<Text {...description} />}
          />
        </Box>
        <Box className="BetaSection">
          <FeatureSection>
            {BETA_FEATURE.map((item, index) => (
              <Fade up key={`feature-${index}`}>
                <div className="featureWrapper">
                  <Image src={item.image} alt={item.title} />
                  <Box className="contextPortion">
                    <Heading
                      as="h3"
                      content={item.title}
                      {...featureTitleStyle}
                    />
                    <Text content={item.des} {...featureDescriptionStyle} />
                  </Box>
                </div>
              </Fade>
            ))}
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

export default BetaSection;
