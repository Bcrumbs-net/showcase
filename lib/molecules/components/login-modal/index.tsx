import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import LoginModalWrapper from './style';
import 'rc-tabs/assets/index.css';
import LogoImage from './images/logo.png';
import LoginImage from './images/login-bg.jpg';
import GoogleLogo from './images/google-icon.jpg';
import { Button, Box,Text, Heading,Image, Input, CheckBox } from '../../../atoms';

interface LoginModalProps {
  row?: object;
  col?: object;
  titleStyle?: object;
  hintTextStyle?: object;
  contentWrapper?: object;
  logoStyle?: object;
  descriptionStyle: object;
  googleButtonStyle: object;
  btnStyle: object;
  outlineBtnStyle: object;
}

const LoginModal = ({
  row,
  col,
  btnStyle,
  logoStyle,
  titleStyle,
  contentWrapper,
  outlineBtnStyle,
  descriptionStyle,
  googleButtonStyle,
}:LoginModalProps) => {
  const LoginButtonGroup = () => (
    <Fragment>
      <Button className="default" title="LOGIN" {...btnStyle} />
      <Button
        title="Forget Password"
        variant="textButton"
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  const SignupButtonGroup = () => (
    <Fragment>
      <Button className="default" title="REGISTER" {...btnStyle} />
    </Fragment>
  );
  return (
    <LoginModalWrapper>
      <Box className="row" {...row}>
        <Box className="col imageCol" {...col}>
          <Image
            className="patternImage"
            src={LoginImage.src}
            alt="Login Banner"
          />
        </Box>
        <Box className="col tabCol" {...col}>
          <Box {...contentWrapper}>
            <Image 
              // @ts-ignore
              src={LogoImage} {...logoStyle} alt="Logo" />
            <Tabs
              defaultActiveKey="loginForm"
              renderTabBar={() => <ScrollableInkTabBar />}
              renderTabContent={() => <TabContent />}
            >
              <TabPane tab="LOGIN" key="loginForm">
                <Heading content="Welcome Folk" {...titleStyle} />
                <Text
                  content="Welcome to Mate Family. Please login with your personal account information letter."
                  {...descriptionStyle}
                />
                <Button
                  icon={<Image src={GoogleLogo.src} alt="Google Icon" />}
                  title="Sign in with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />

                <Input inputType="email" isMaterial label="Email Address" />
                <Input inputType="password" isMaterial label="Password" />
                <CheckBox
                  id="remember"
                  htmlFor="remember"
                  labelText="Remember Me"
                />
                <div>
                  <LoginButtonGroup />
                </div>
              </TabPane>
              <TabPane tab="REGISTER" key="registerForm">
                <Heading content="Welcome Folk" {...titleStyle} />
                <Text
                  content="Welcome to Mate Family. Please login with your personal account information letter."
                  {...descriptionStyle}
                />
                <Button
                  icon={<Image src={GoogleLogo.src} alt="Google Icon" />}
                  title="Sign up with Google"
                  iconPosition="left"
                  className="google-login__btn"
                  {...googleButtonStyle}
                />
                <Input isMaterial label="Full Name" />
                <Input inputType="email" isMaterial label="Email Address" />
                <Input inputType="password" isMaterial label="Password" />
                <div>
                  <SignupButtonGroup />
                </div>
              </TabPane>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </LoginModalWrapper>
  );
};

// LoginModal style props
LoginModal.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  logoStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  hintTextStyle: PropTypes.object,
  contentWrapper: PropTypes.object,
  descriptionStyle: PropTypes.object,
  googleButtonStyle: PropTypes.object,

  
};

// LoginModal default style
LoginModal.defaultProps = {
  // Team member row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Team member col default style
  col: {
    width: [1, 1 / 2],
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
    ml: '15px',
  },
  // Title default style
  titleStyle: {
    fontSize: ['22px', '36px', '50px'],
    fontWeight: '400',
    color: '#20201D',
    letterSpacing: '-0.025em',
    mt: '35px',
    mb: '10px',
  },
  // Description default style
  descriptionStyle: {
    color: 'rgba(52, 61, 72, 0.8)',
    fontSize: '15px',
    lineHeight: '26px',
    letterSpacing: '-0.025em',
    mb: '23px',
    ml: '1px',
  },
  // Content wrapper style
  contentWrapper: {
    pt: ['32px', '56px'],
    pl: ['17px', '32px', '38px', '40px', '56px'],
    pr: '32px',
    pb: ['32px', '56px'],
  },
  // Default button style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
  // Outline button outline style
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#10ac84',
  },
  // Google button style
  googleButtonStyle: {
    bg: '#ffffff',
    color: '#343D48',
  },
};

export default LoginModal;
