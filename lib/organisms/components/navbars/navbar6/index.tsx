import { useContext } from "react";
import Link from "next/link";
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
import { NavbarDataType } from "../../../types/navbarTypes";

interface NavbarProps {
  navbarStyle: object;
  logoStyle: object;
  button: object;
  row: object;
  menuWrapper: object;
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
          <Logo
            href="/"
            logoSrc={data.whiteLogoSrc}
            title="Portfolio"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="#"
            logoSrc={data.logoSrc}
            title="Portfolio"
            logoStyle={logoStyle}
            className="logo-alt"
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              offset={-70}
              model={model}
            />
            <Link href="#" className="navbar_button">

              <Button {...button} title="GET STARTED" />

            </Link>
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#fff" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                model={model}
                drawerClose={true}
                offset={-100}
              />
              <Link href="#" className="navbar_drawer_button">

                <Button {...button} title="GET STARTED" />

              </Link>
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
    maxWidth: ["120px", "130px"],
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
