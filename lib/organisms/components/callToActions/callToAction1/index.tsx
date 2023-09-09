import {  Box, Text, Heading, Button, Container } from '../../../../atoms';
import { ButtonWrapper } from './takeaction.style';

interface TakeActionSectionProps {
  sectionWrapper?: object;
  secTitleWrapper?: object;
  secTitle?: object;
  secDescription?: object;
  replyWrapper?: object;
  replyTime?: object;
  buttonStyle?: object;
  secButtonStyle?: object;
  buttonWrapper?: object;
  model: any;
  isAR: boolean;
}

const TakeActionSection = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  replyTime,
  buttonStyle,
  secButtonStyle,
  buttonWrapper,
  model,
  isAR,
}: TakeActionSectionProps) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  const ButtonGroup = () => (
    <ButtonWrapper>
      {data.secondaryButtonLabel ? (
        <Button
          title={data.secondaryButtonLabel}
          variant="textButton"
          onClick={() => window.open(data.secondaryButtonUrl, '_blank')}
          {...secButtonStyle}
        />
      ) : null}
      {data.buttonLabel ? (
        <Button
          title={data.buttonLabel}
          onClick={() => window.open(data.buttonUrl, '_blank')}
          {...buttonStyle}
        />
      ) : null}
    </ButtonWrapper>
  );
  return (
    <Box {...sectionWrapper} as="section" id={model.name}>
      <Container noGutter mobileGutter width={1200}>
        <Box
          {...secTitleWrapper}
          style={{
            direction: isAR ? 'rtl' : 'ltr',
          }}
        >
          <Heading {...secTitle} content={data.sectionTitle} />
          <Text {...secDescription} content={data.description} />
        </Box>
        <Box
          {...buttonWrapper}
          style={{
            direction: isAR ? 'rtl' : 'ltr',
          }}
        >
          <ButtonGroup />
        </Box>
      </Container>
    </Box>
  );
};

TakeActionSection.defaultProps = {
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
    ml: '6px',
    mr: '6px',
  },
  secButtonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    pl: '23px',
    pr: '23px',
    ml: '6px',
    mr: '6px',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px',
  },
};

export default TakeActionSection;
