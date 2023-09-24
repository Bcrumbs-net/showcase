import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Drawer, NavbarWrapper, DrawerContext, HamburgMenu, Container
} from '../../../../atoms';
import { MENU_ITEMS } from '../../../../data/Saas';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import LogoImage from '../../../assets/image/saas/logo.png';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper, model, isAR }) => {
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
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={data.logo}
            title="Agency"
            logoStyle={logoStyle}
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              model={model}
              isAR={isAR}
              offset={-70} drawerClose={undefined}            
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                model={model}
                isAR={isAR}
                drawerClose={true}
                offset={-100}
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
    alignItems: 'center',
    justifyContent: [
      'space-between',
      'space-between',
      'space-between',
      'flex-start',
    ],
    width: '100%',
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '166px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
