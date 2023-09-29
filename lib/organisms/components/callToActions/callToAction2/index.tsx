import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from '../../../../../bootstrapers/showcase/templates/portfolio/globalStyle';
import { CallToActionWrapper } from './style';
import { Text, Image,Box, Container, Heading, Button } from '../../../../atoms';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface CallToActionProps{
  sectionWrapper:object;
  textArea:object;
  buttonArea:object;
  buttonStyle:object;
  title:object;
  description:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const CallToAction = ({
  sectionWrapper,
  textArea,
  buttonArea,
  buttonStyle,
  title,
  description,
  model,
  isAR,
  data
}:CallToActionProps) => {
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        <CallToActionWrapper>
          <Box {...textArea}>
            <Heading content={data.title} {...title} />
            <Text content={data.description} {...description} />
          </Box>
          <Box {...buttonArea}>
            <ButtonWrapper>
              <Button
                title={data.buttonLabel}
                className="portfolio_button"
                {...buttonStyle}
              />
            </ButtonWrapper>
          </Box>
        </CallToActionWrapper>
      </Container>
    </Box>
  );
};

CallToAction.propTypes = {
  sectionWrapper: PropTypes.object,
  textArea: PropTypes.object,
  buttonArea: PropTypes.object,
  buttonStyle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
};

CallToAction.defaultProps = {
  sectionWrapper: {},
  textArea: {
    width: ['100%', '100%', '55%'],
    mb: ['40px', '40px', '0', '0', '0'],
  },
  title: {
    fontSize: ['20px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '15px', '18px', '22px', '22px'],
    textAlign: ['center', 'center', 'left', 'left', 'left'],
  },
  description: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: 0,
    textAlign: ['center', 'center', 'left', 'left', 'left'],
  },
  buttonArea: {
    zIndex: 1,
  },
  buttonStyle: {
    type: 'button',
    fontSize: ['14px', '14px', '15px', '16px', '16px'],
    fontWeight: '500',
    color: '#fff',
    pl: '35px',
    pr: '35px',
  },
};

export default withModelToDataObjProp(CallToAction) ;
