import { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Drawer, NavbarWrapper, DrawerContext, HamburgMenu
} from '../../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../../molecules';
import { Container } from './style';
// import { openModal, closeModal } from '@redq/reuse-modal';
import SearchPanel from '../../../../containers/App/SearchPanel';
import LoginModal from '../../../../containers/App/LoginModal';

// Default close button for modal
const CloseModalButton = () => (null
  // <Button
  //   className="modalCloseBtn"
  //   variant="fab"
  //   onClick={() => closeModal()}
  //   icon={<i className="flaticon-plus-symbol" />}
  // />
);
const CloseModalButtonAlt = () => (
  null
  // <Button
  //   className="modalCloseBtn alt"
  //   variant="fab"
  //   onClick={() => closeModal()}
  //   icon={<i className="flaticon-plus-symbol" />}
  // />
);
interface NavbarProps {
  wrapperStyle2?: object;
  navbarStyle?: object;
  logoStyle?: object;
  buttonStyle: object;
  model: any;
}
const Navbar = ({ navbarStyle, logoStyle, buttonStyle, model }:NavbarProps) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Search modal handler
  const handleSearchModal = () => {
    // openModal({
    //   config: {
    //     className: 'search-modal',
    //     disableDragging: true,
    //     width: '100%',
    //     height: '100%',
    //     animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
    //     animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
    //     transition: {
    //       mass: 1,
    //       tension: 180,
    //       friction: 26,
    //     },
    //   },
    //   component: SearchPanel,
    //   componentProps: {},
    //   closeComponent: CloseModalButtonAlt,
    //   closeOnClickOutside: false,
    // });
  };
  // Authentication modal handler
  const handleLoginModal = () => {
    // openModal({
    //   config: {
    //     className: 'login-modal',
    //     disableDragging: true,
    //     width: '100%',
    //     height: '100%',
    //     animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
    //     animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
    //     transition: {
    //       mass: 1,
    //       tension: 180,
    //       friction: 26,
    //     },
    //   },
    //   component: LoginModal,
    //   componentProps: {},
    //   closeComponent: CloseModalButton,
    //   closeOnClickOutside: false,
    // });
  };
  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href={data.href}
          logoSrc={data.logo}
          title={data.title}
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="textButton"
            onClick={handleSearchModal}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search"
          />
          <Button
            variant="textButton"
            onClick={handleLoginModal}
            icon={<i className="flaticon-user" />}
            aria-label="login"
          />
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              //menuItems={menusLst}
              drawerClose={true}
              offset={-100}
              model={model}
            />
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// Navbar style props
Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
  wrapperStyle2: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: ['100px', '140px'],
  },
  buttonStyle: {
    minHeight: '70px',
    color: '#fff',
  },
};

export default Navbar;
