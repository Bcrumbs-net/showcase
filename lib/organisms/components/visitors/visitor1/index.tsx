import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {
  Box,
  Text,
  Heading,
  Card,
  Image,
  Button,
  Container
} from '../../../../atoms';
import { FeatureBlock } from '../../../../molecules';
import VisitorSectionWrapper, { SectionObject } from './style';
import ImageOne from '../../../assets/image/saas/saasvisitor1.png';
import ImageBg from '../../../assets/image/saas/visitor_bg.png';

interface VisitorSectionProps {
  title:object;
  description:object;
  textArea:object;
  imageWrapper:object;
  btnStyle:object;
  model:any;
}
const VisitorSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  btnStyle,
  model,
}:VisitorSectionProps) => {
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let CustomVisitorSectionWrapper;
  if (data.backgroundColor) {
    CustomVisitorSectionWrapper = styled(VisitorSectionWrapper)`
      background-color: ${data.backgroundColor};
    `;
  } else {
    CustomVisitorSectionWrapper = VisitorSectionWrapper;
  }
  let CustomHeading;
  if (data.backgroundColor) {
    CustomHeading = styled(Heading)`
      color: ${data.fontColor} !important;
    `;
  } else {
    CustomHeading = Heading;
  }
  let CustomText;
  if (data.backgroundColor) {
    CustomText = styled(Text)`
      color: ${data.fontColor} !important;
    `;
  } else {
    CustomText = Text;
  }
  return (
    <CustomVisitorSectionWrapper id={model.name}>
      <SectionObject>
        <Card 
        //@ts-ignore
        className="objectWrapper" 
        {...imageWrapper}
        >
          <Zoom>
            <Image src={data.back_image} alt="BgImage" />
          </Zoom>
          <Card 
          //@ts-ignore
          className="dashboardWrapper" 
          {...imageWrapper}
          >
            <Fade left>
              <Image src={data.image} alt="VisitorDashboard1" />
            </Fade>
          </Card>
        </Card>
      </SectionObject>
      <Container>
        <Box {...textArea}>
          <FeatureBlock
            title={<CustomHeading content={data.title} {...title} />}
            description={
              <CustomText content={data.description} {...description} />
            }
            button={
              data.button_url && data.button_label ? (
                <a href={data.button_url}>
                  <Button title={data.button_label} {...btnStyle} />
                </a>
              ) : null
            }
          />
        </Box>
      </Container>
    </CustomVisitorSectionWrapper>
  );
};

VisitorSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  textArea: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
