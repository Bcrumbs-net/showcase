import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Drawer, NavbarWrapper, DrawerContext, HamburgMenu, Container
} from '../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../molecules';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper, model }) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          {data.logo ? (
            <Logo
              href="/"
              logoSrc={data.logo}
              title="Portfolio"
              logoStyle={logoStyle}
              className="main-logo"
            />
          ) : null}
          {/* {data.logo ? (
            <Logo
              href="/"
              logoSrc={data.logo}
              title="Portfolio"
              logoStyle={logoStyle}
              className="logo-alt"
            />
          ) : null} */}
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              // menuItems={MENU_LEFT_ITEMS}
              offset={-70}
              model={model}
            />
            {/* <ScrollSpyMenu
              className="main_menu menuRight"
             // menuItems={MENU_RIGHT_ITEMS}
              model = {model}
              offset={-70}
            />
            */}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
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
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
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
    justifyContent: 'flex-end',
  },
};

export default Navbar;
