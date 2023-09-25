import { useContext } from 'react';
import { GraphContent } from '@bcrumbs.net/bc-api';
//import PropTypes from 'prop-types';
//import { openModal, closeModal } from '@redq/reuse-modal';
import CopyrightSection from './copyrights';
import { Container } from './navbar.style';
import { DrawerContext, NavbarWrapper, Drawer, HamburgMenu } from '../../../../atoms';
import { Logo ,ScrollSpyMenu} from '../../../../molecules';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
//import SearchPanel from '../SearchPanel';
//import LoginModal from '../LoginModal';
// Default close button for modal
// const CloseModalButton = () => (
//   <Button
//     className="modalCloseBtn"
//     variant="fab"
//     onClick={() => closeModal()}
//     icon={<i className="flaticon-plus-symbol" />}
//   />
// );

// // Alt close button for modal
// const CloseModalButtonAlt = () => (
//   <Button
//     className="modalCloseBtn alt"
//     variant="fab"
//     onClick={() => closeModal()}
//     icon={<i className="flaticon-plus-symbol" />}
//   />
// );
interface NavbarProps  {
  navbarStyle: object;
  logoStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}

const Navbar = ({ navbarStyle, logoStyle, model, isAR, data }: NavbarProps ) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Search modal handler
  // const handleSearchModal = () => {
  //   openModal({
  //     config: {
  //       className: 'search-modal',
  //       disableDragging: true,
  //       width: '100%',
  //       height: '100%',
  //       animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
  //       animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
  //       transition: {
  //         mass: 1,
  //         tension: 180,
  //         friction: 26,
  //       },
  //     },
  //     component: SearchPanel,
  //     componentProps: {},
  //     closeComponent: CloseModalButtonAlt,
  //     closeOnClickOutside: false,
  //   });
  // };

  // // Authentication modal handler
  // const handleLoginModal = () => {
  //   openModal({
  //     config: {
  //       className: 'login-modal',
  //       disableDragging: true,
  //       width: '100%',
  //       height: '100%',
  //       animationFrom: { transform: 'translateY(100px)' }, // react-spring <Spring from={}> props value
  //       animationTo: { transform: 'translateY(0)' }, //  react-spring <Spring to={}> props value
  //       transition: {
  //         mass: 1,
  //         tension: 180,
  //         friction: 26,
  //       },
  //     },
  //     component: LoginModal,
  //     componentProps: {},
  //     closeComponent: CloseModalButton,
  //     closeOnClickOutside: false,
  //   });
  // };

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  let socialModel;
  if (model.children && model.children.length > 0) {
    const socialModelQuery = model.children.filter((m) => m.modelId == 403193);
    if (socialModelQuery && socialModelQuery.length > 0)
      socialModel = socialModelQuery[0];
  }

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/"
          logoSrc={data.logo}
          title="Agency"
          logoStyle={logoStyle}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/*<Button
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
          />*/}
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <ScrollSpyMenu
              //menuItems={data.menuItems}
              drawerClose={true}
              offset={-100}
              model={model}
              isAR={isAR}
            />
            {socialModel ? <CopyrightSection model={socialModel} /> : null}
          </Drawer>
        </div>
      </Container>
    </NavbarWrapper>
  );
};

// // Navbar style props
// Navbar.propTypes = {
//   navbarStyle: PropTypes.object,
//   logoStyle: PropTypes.object,
// };

Navbar.defaultProps = {
  // Default navbar style
  navbarStyle: {
    minHeight: '70px',
    height: '70px',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default withModelToDataObjProp(Navbar);
