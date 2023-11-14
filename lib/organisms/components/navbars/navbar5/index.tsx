import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Drawer, NavbarWrapper, DrawerContext, Container, HamburgMenu
} from '../../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface NavbarProps{
  navbarStyle:object;
  logoStyle:object;
  button:object;
  row:object;
  menuWrapper:object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
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
          {data.logo ? (
            <Logo
              href="/"
              logoSrc={data.logo}
              title="Food"
              logoStyle={logoStyle}
              className="main-logo logo"
            />
          ) : null}
          {data.logo ? (
            <Logo
              href="/"
              logoSrc={data.logo}
              title="Food"
              logoStyle={logoStyle}
              className="logo-alt logo"
            />
          ) : null}
          <Box className="menuWrapper" {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              //menuItems={MENU_ITEMS}
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
                // menuItems={MENU_ITEMS}
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

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
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
