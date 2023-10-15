import { useContext } from 'react';
import {
  Box,
  Drawer,
  NavbarWrapper,
  DrawerContext,
  HamburgMenu,
  Container,
} from '../../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface NavbarProps {
  navbarStyle: object;
  logoStyle: object;
  row: object;
  menuWrapper: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const Navbar = ({
  navbarStyle,
  logoStyle,
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
              offset={-70}
              drawerClose={undefined}
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

Navbar.defaultProps = {
  navbarStyle: {
    className: "hosting_navbar",
    minHeight: "70px",
    display: "block",
  },
  row: {
    flexBox: true,
    alignItems: "center",
    justifyContent: [
      "space-between",
      "space-between",
      "space-between",
      "flex-start",
    ],
    width: "100%",
  },
  logoStyle: {
    maxWidth: "130px",
    mr: [0, 0, 0, "166px"],
  },
  button: {
    type: "button",
    fontSize: "13px",
    fontWeight: "600",
    color: "white",
    borderRadius: "4px",
    pl: "15px",
    pr: "15px",
    colors: "primaryWithBg",
    minHeight: "auto",
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: "center",
  },
};

export default withModelToDataObjProp(Navbar);
