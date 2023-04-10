import { useContext } from "react";
import PropTypes from "prop-types";
import {
  Button, Drawer, NavbarWrapper, DrawerContext, Box, Container, HamburgMenu
} from '../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../molecules';
import { MENU_ITEMS } from "../../../data/SaasClassic";
import LogoImage from "../../../assets/image/saasClassic/logo-white.png";
import LogoImageAlt from "../../../assets/image/saasClassic/logo.png";

const Navbar = ({
  navbarStyle,
  logoStyle,
  button,
  row,
  menuWrapper,
  model,
}) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };
  
  let data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

  return (
    <NavbarWrapper {...navbarStyle} className="saas_navbar">
      <Container>
        <Box {...row}>
          {data.logo ? (
            <Logo
              href="#"
              logoSrc={data.logo}
              title="Portfolio"
              logoStyle={logoStyle}
              className="main-logo"
            />
          ) : null}
          {/*<Logo
            href="#"
            logoSrc={LogoImageAlt}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />*/}
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              //menuItems={MENU_ITEMS}
              offset={-70}
              model={model}
            />
            <a href={data.button_url}>
              <a className="navbar_button">
                <Button {...button} title="GET STARTED" />
              </a>
            </a>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                //menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
                model={model}
              />
              <a href={data.button_url}>
                <a className="navbar_drawer_button">
                  <Button {...button} title="GET STARTED" />
                </a>
              </a>
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
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  logoStyle: {
    maxWidth: ["120px", "180px"],
  },
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "700",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "secondaryWithBg",
    minHeight: "auto",
    height: "40px",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default Navbar;
