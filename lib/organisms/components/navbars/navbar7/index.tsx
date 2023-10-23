import { useContext } from "react";
import {
  Button,
  Drawer,
  NavbarWrapper,
  DrawerContext,
  Box,
  Container,
  HamburgMenu,
} from "../../../../atoms";
import { ScrollSpyMenu, Logo } from "../../../../molecules";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface NavbarProps {
  navbarStyle: object;
  logoStyle: object;
  button: object;
  row: object;
  menuWrapper: object;
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
  isAR,
  data,
}: NavbarProps) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

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

export default withModelToDataObjProp(Navbar);
