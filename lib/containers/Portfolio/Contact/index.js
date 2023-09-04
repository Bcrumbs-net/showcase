import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Heading, Image, Container, Button } from '../../../atoms';
import { ButtonWrapper } from '../../../../bootstrapers/showcase/templates/portfolio/globalStyle';
import { ActiveStatus } from './contact.style';
import Author from '../../../assets/image/portfolio/avatar.png';

const ContactSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  buttonWrapper,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content={data.title} />
          <Text {...secDescription} content={data.description} />
        </Box>
        <Box {...replyWrapper}>
          <ActiveStatus>
            <Image src={data.image} alt="Author Avatar" />
          </ActiveStatus>
          <Heading as="h4" content={data.subtitle} {...replyTime} />
        </Box>
        <Box {...buttonWrapper}>
          <ButtonWrapper>
            <Button
              title={data.buttonLabel}
              className="portfolio_button"
              {...buttonStyle}
            />
          </ButtonWrapper>
        </Box>
      </Container>
    </Box>
  );
};

ContactSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['70px', '80px', '100px', '110px', '140px'],
    bg: '#f9f9f9',
  },
  secTitleWrapper: {
    mb: '30px',
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center',
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0',
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center',
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#302b4e',
    mb: 0,
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
};

export default ContactSection;
