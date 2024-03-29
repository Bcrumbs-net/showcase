import React from 'react';
import Fade from 'react-reveal/Fade';
import AboutUsSectionWrapper from './style';
import { Container, Box, Heading, Card, Button ,Image,Text} from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface AboutUsSectionProps {
  row?: object;
  col35?: object;
  col65?: object;
  featureCol?: object;
  title?: object;
  description?: object;
  sectionHeader?: object;
  textArea?: object;
  featureTitle?: object;
  sectionTitle?: object;
  btnStyle?: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const AboutUsSection = ({
  row,
  col35,
  col65,
  title,
  description,
  textArea,
  featureTitle,
  sectionHeader,
  sectionTitle,
  btnStyle,
  model,
  isAR,
  data,
}:AboutUsSectionProps) => {
  return (
    <AboutUsSectionWrapper id={model.name}>
      <Container>
        <Box {...sectionHeader}>
          <Heading content={data.title} {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          <Box className="col" {...col35}>
            <Card 
            //@ts-ignore
            className="group-gallery">
              <Fade bottom delay={90}>
                <Image src={data.image} alt="Feature Image" />
              </Fade>
            </Card>
          </Box>
          <Box className="col" {...col65}>
            <Box
              style={{
                textAlign: isAR ? 'right' : 'left',
                paddingRight: isAR ? '20px' : '',
              }}
            >
              <FeatureBlock
                style={{ paddingRight: isAR ? '20' : '' }}
                description={
                  <Text content={data.description} {...description} />
                }
                isAR={isAR}
              />
            </Box>
            {data.btnText ? (
              <Box
                {...textArea}
                style={{
                  textAlign: isAR ? 'right' : 'left',
                  paddingRight: isAR ? '20px' : '',
                }}
              >
                <Button
                  title={data.btnText}
                  {...btnStyle}
                  onClick={() => window.open(data.btnUrl)}
                />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Container>
    </AboutUsSectionWrapper>
  );
};


AboutUsSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['0', '0'],
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['35px', '45px', '55px', '65px'],
    fontWeight: '400',
    //color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // About us section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // About us section col default style
  col35: {
    width: [1, '100%', '35%'],
  },
  col65: {
    width: [1, '100%', '65%'],
  },
  // About us section text area default style
  textArea: {
    maxWidth: '490px',
    pl: '40px',
  },
  // About us section title default style
  title: {
    fontSize: ['35px', '45px', '55px', '65px'],
    lineHeight: '1.5',
    fontWeight: '300',
    letterSpacing: '-0.025em',
    mb: '30px',
  },
  // About us section description default style
  description: {
    fontSize: '20px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
  },

  // feature title default style
  featureTitle: {
    fontSize: '20px',
    fontWeight: '400',
    color: '#343d48',
    lineHeight: '1.5',
    mb: '8px',
    letterSpacing: '-0.020em',
  },
  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default withModelToDataObjProp(AboutUsSection);
