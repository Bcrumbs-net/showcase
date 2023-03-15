import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Text, Heading, Container, Button } from '../../../atoms';
import { HowWrapper, BtnWrapper } from './how.style';

const HowItWorksSection = ({
  row,
  contentArea,
  greetingStyle,
  aboutStyle,
  button,
  model,
}) => {
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <HowWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content={data.title} {...greetingStyle} />

            <Text content={data.aboutStyle} {...aboutStyle} />
            <BtnWrapper>
              <Link href={data.btnUrl}>
                <a>
                  <Button
                    title={data.btnLabel}
                    variant="textButton"
                    icon={<i className="flaticon-next" />}
                    {...button}
                  />
                </a>
              </Link>
            </BtnWrapper>
          </Box>
        </Box>
      </Container>
    </HowWrapper>
  );
};

HowItWorksSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  button: PropTypes.object,
};

HowItWorksSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  contentArea: {
    width: ['100%', '100%', '45%', '50%', '50%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  greetingStyle: {
    as: 'h3',
    fontSize: ['22px', '26px', '26px', '30px', '36px'],
    fontWeight: '600',
    color: '#15172C',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    textAlign: 'left',
    fontFamily: 'Poppins',
  },
  aboutStyle: {
    lineHeight: ['28px', '32px', '32px', '32px', '32px'],
    mt: ['0px', '0px', '0px', '0px', '0px'],
    mb: ['20px', '20px', '20px', '20px', '20px'],
    maxWidth: ['100%', '100%', '100%', '510px', '510px'],
    textAlign: ['left', 'left'],
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#15172C',
    fontFamily: 'Lato',
  },
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'Lato',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
    minHeight: '47px',
    pt: '0px',
    pb: '0',
  },
};

export default HowItWorksSection;
