import { useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  Button, Drawer, NavbarWrapper, DrawerContext, Box, HamburgMenu, Container
} from '../../../../atoms';
import { MENU_ITEMS } from '../../../../data/Portfolio/data';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import LogoImage from '../../../assets/image/portfolio/logo.png';
import LogoImageAlt from '../../../assets/image/portfolio/logo-alt.png';
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
  isAR,
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
    <NavbarWrapper {...navbarStyle} className="portfolio_navbar">
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
          {data.logo ? (
            <Logo
              href="/"
              logoSrc={data.logo}
              title="Portfolio"
              logoStyle={logoStyle}
              className="logo-alt"
            />
          ) : null}
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              //menuItems={MENU_ITEMS}
              offset={-70}
              model={model}
            />
            {data.letsTalkLink ? (
              <Link href={data.letsTalkLink}>
                <a className="navbar_button">
                  <Button {...button} title="LET'S TALK" />
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
                //menuItems={MENU_ITEMS}
                drawerClose={true}
                offset={-100}
                model={model}
              />
              {data.letsTalkLink ? (
                <Link href={data.letsTalkLink}>
                  <a className="navbar_drawer_button">
                    <Button {...button} title="LET'S TALK" />
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
  },
};

export default withModelToDataObjProp(Navbar) ;
