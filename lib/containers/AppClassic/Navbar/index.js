import { useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { menu } from 'react-icons-kit/feather/menu';
import { x } from 'react-icons-kit/feather/x';
import { search } from 'react-icons-kit/feather/search';
import { Button, Container, useOnClickOutside } from '../../../atoms';
import { ScrollSpyMenu, Logo } from '../../../molecules';
import NavbarWrapper, { MenuArea, MobileMenu, Search } from './navbar.style';
import { navbar } from '../../../data/AppClassic';

const Navbar = () => {
  const { logo, navMenu } = navbar;
  const [state, setState] = useState({
    search: '',
    searchToggle: false,
    mobileMenu: false,
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = type => {
    if (type === 'search') {
      setState({
        ...state,
        search: '',
        searchToggle: !state.searchToggle,
        mobileMenu: false,
      });
    }

    if (type === 'menu') {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleOnChange = event => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const handleSearchForm = event => {
    event.preventDefault();

    if (state.search !== '') {
      setState({
        ...state,
        search: '',
      });
    } else {
      console.log('Please fill this field.');
    }
  };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          className="logo"
          href="/appclassic"
          logoSrc={logo}
          title="App Classic"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? 'active' : ''}>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          {/* end of main menu */}

          <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler('search')}
            />
          </Search>
          {/* end of search */}

          <AnchorLink href="#trail" offset={84}>
            <Button className="trail" title="Try for Free" />
          </AnchorLink>

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler('menu')}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? 'active' : ''}`}>
        <Container>
          <ScrollSpyMenu className="menu" menuItems={navMenu} offset={-84} />
          <Button title="Try for Free" />
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
