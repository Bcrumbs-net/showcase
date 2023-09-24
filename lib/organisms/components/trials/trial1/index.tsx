import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Text, Heading, Image, Container, Button } from '../../../../atoms';
import VendorLogos from '../../../assets/image/saas/vendor-logos.png';

interface TrialSectionProps {
  sectionWrapper:object;
  row:object;
  title:object;
  description:object;
  textArea:object;
  imageArea:object;
  ImageOne:object;
  btnStyle:object;
  outlineBtnStyle:object;
  model:any;
}
const TrialSection = ({
  sectionWrapper,
  row,
  title,
  description,
  textArea,
  imageArea,
  ImageOne,
  btnStyle,
  outlineBtnStyle,
  model,
}:TrialSectionProps) => {
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

  let CustomBoxWrapper;
  if (data.backgroundColor) {
    CustomBoxWrapper = styled(Box)`
      background: ${data.backgroundColor} !important;
    `;
  } else {
    CustomBoxWrapper = Box;
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
    <CustomBoxWrapper {...sectionWrapper} id={model.name}>
      <Container>
        <Box {...row}>
          <Box {...imageArea}>
            <Image {...ImageOne} src={data.image} alt="VendorLogos" />
          </Box>
          <Box {...textArea}>
            <CustomHeading {...title} content={data.title} />
            <CustomText {...description} content={data.description} />
            <div className="button_group">
              {data.first_button_label && data.first_button_url ? (
                <Button
                  title={data.first_button_label}
                  {...btnStyle}
                  onClick={() => {
                    window.location.href = data.first_button_url;
                  }}
                />
              ) : null}
              {data.second_button_label && data.second_button_url ? (
                <Button
                  title={data.second_button_label}
                  variant="textButton"
                  onClick={() => {
                    window.location.href = data.second_button_url;
                  }}
                  {...outlineBtnStyle}
                />
              ) : null}
            </div>
          </Box>
        </Box>
      </Container>
    </CustomBoxWrapper>
  );
};

TrialSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  imageArea: PropTypes.object,
  ImageOne: PropTypes.object,
};

TrialSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    className: 'trial-section',
    pt: ['20px', '40px', '60px', '80px'],
    pb: ['20px', '20px', '20px', '80px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textArea: {
    width: ['100%', '100%', '80%', '43%'],
  },
  imageArea: {
    width: ['100%', '100%', '43%'],
    mb: ['35px', '35px', '40px', '40px'],
  },
  title: {
    fontSize: ['32px', '32px', '36px', '42px', '48px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: '28px',
    textAlign: 'center',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '2.1',
    textAlign: 'center',
    mb: ['35px', '35px', '40px', '60px'],
  },
  ImageOne: {
    ml: 'auto',
    mr: 'auto',
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
  },
};

export default TrialSection;
