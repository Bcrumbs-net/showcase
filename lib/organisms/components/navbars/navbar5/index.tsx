import { useContext } from 'react';
import {
  Box, Drawer, NavbarWrapper, DrawerContext, Container, HamburgMenu
} from '../../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { NavbarDataType } from '../../../types/navbarTypes';

interface NavbarProps{
  navbarStyle:object;
  logoStyle:object;
  button:object;
  row:object;
  menuWrapper:object;
  model: GraphContent;
  isAR: boolean;
  data: NavbarDataType;
}
const Navbar = ({
  navbarStyle,
  logoStyle,
  button,
  row,
  menuWrapper,
  model,
  data
}:NavbarProps) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  return (
    <NavbarWrapper
      {...navbarStyle}
      className="food_navbar"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          {data.logoSrc ? (
            <Logo
              href="/"
              logoSrc={data.logoSrc}
              title="Food"
              logoStyle={logoStyle}
              className="main-logo logo"
            />
          ) : null}
          {data.logoSrc ? (
            <Logo
              href="/"
              logoSrc={data.logoSrc}
              title="Food"
              logoStyle={logoStyle}
              className="logo-alt logo"
            />
          ) : null}
          <Box className="menuWrapper" {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              offset={-70}
              model={model}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                drawerClose={true}
                offset={-100}
                model={model}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['100px', '115px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto',
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
    width: '100%',
  },
};

export default withModelToDataObjProp(Navbar) ;
