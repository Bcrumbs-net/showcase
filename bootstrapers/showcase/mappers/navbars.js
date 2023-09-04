import { Fragment } from "react";
import Sticky from "react-stickynode";
import { DrawerProvider } from "../../../lib/atoms";
import PortfolioNavbar from "../../../lib/containers/Portfolio/Navbar";
import SaaSNavbar from "../../../lib/containers/Saas/Navbar";
import RideNavbar from "../../../lib/containers/Ride/Navbar";
import CharityNavbar from "../../../lib/containers/Charity/Navbar";
import DrawerSection from "../../../lib/containers/Charity/DrawerSection";
import AgencyNavbar from "../../../lib/containers/Agency/Navbar";
import AppNavbar from "../../../lib/containers/App/Navbar";
import FoodNavbar from "../../../lib/containers/Food/Navbar";
import SaaSClassicNavbar from "../../../lib/containers/SaasClassic/Navbar";
import CryptoNavbar from "../../../lib/containers/Crypto/Navbar";
import CryptoModern from "../../../lib/containers/CryptoModern/Navbar";

const resolveComponents = () => {
  return {
    403287: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <PortfolioNavbar {...props} logoStyle={{ height: 56 }} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Portfolio Navbar",
      category: "Navbar",
    },
    403447: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <SaaSNavbar {...props} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "SaaS Navbar",
      category: "Navbar",
    },
    403172: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <AgencyNavbar {...props} logoStyle={{ height: 64 }} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Agency Navbar",
      category: "Navbar",
    },
    403201: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <AppNavbar {...props} logoStyle={{ height: 64 }} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Agency Navbar",
      category: "Navbar",
    },
    403314: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <RideNavbar {...props} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Ride Navbar",
      category: "Navbar",
    },
    403111: {
      render: (props) => (
        <Fragment>
          <Sticky top={0} innerZ={999} activeClass="sticky-nav-active">
            <CharityNavbar {...props} />
          </Sticky>
          <DrawerProvider>
            <DrawerSection {...props} />
          </DrawerProvider>
        </Fragment>
      ),
      name: "Charity Navbar",
      category: "Navbar",
    },
    403458: {
      render: (props) => (
        <Sticky top={0} innerZ={999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <FoodNavbar {...props} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Food Navbar",
      category: "Navbar",
    },
    403506: {
      render: (props) => (
        <Sticky top={0} innerZ={999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <CryptoModern {...props} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "CryptoModern Navbar",
      category: "Navbar",
    },
    403337: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <SaaSClassicNavbar {...props} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Saas Classic Navbar",
      category: "Navbar",
    },
    403143: {
      render: (props) => (
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <CryptoNavbar {...props} logoStyle={{ height: 56 }} />
          </DrawerProvider>
        </Sticky>
      ),
      name: "Crypto Navbar",
      category: "Navbar",
    },
  };
};
export default resolveComponents;
