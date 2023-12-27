import { useContext } from "react";
import Link from "next/link";
import {
  Button,
  Drawer,
  NavbarWrapper,
  DrawerContext,
  Box,
  HamburgMenu,
  Container,
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
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          {data.whiteLogoSrc ? (
            <Logo
              href="/"
              logoSrc={data.whiteLogoSrc}
              title="Portfolio"
              logoStyle={logoStyle}
              className="main-logo"
            />
          ) : null}
          {data.logoSrc ? (
            <Logo
              href="/"
              logoSrc={data.logoSrc}
              title="Portfolio"
              logoStyle={logoStyle}
              className="logo-alt"
            />
          ) : null}
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              offset={-70}
              model={model}
            />
            {data.ctaLink ? (
              <Link href={data.ctaLink}>
                <a className="navbar_button">
                  <Button {...button} title={data.ctaLabel} />
                </a>
              </Link>
            ) : null}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#3444f1" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                drawerClose={true}
                offset={-100}
                model={model}
              />
              {data.ctaLink ? (
                <Link href={data.ctaLink}>
                  <a className="navbar_drawer_button">
                    <Button {...button} title={data.ctaLabel} />
                  </a>
                </Link>
              ) : null}
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
    fontSize: "16px",
    pl: "0",
    pr: "0",
    colors: "primary",
    minHeight: "auto",
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default withModelToDataObjProp(Navbar);
