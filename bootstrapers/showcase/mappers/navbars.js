import { Fragment } from "react";
import Sticky from "react-stickynode";
import { DrawerProvider } from "../../../lib/atoms";
import PortfolioNavbar from "../../../lib/organisms/components/navbars/navbar4";
import SaaS2Navbar from "../../../lib/organisms/components/navbars/navbar3";
import RideNavbar from "../../../lib/containers/Ride/Navbar";
import CharityNavbar from "../../../lib/organisms/components/navbars/navbar8";
import CharityDrawerSection from "../../../lib/organisms/components/banners/banner8/drawer";
import AgencyNavbar from "../../../lib/organisms/components/navbars/navbar1";
import AppNavbar from "../../../lib/organisms/components/navbars/navbar2";
import FoodNavbar from "../../../lib/organisms/components/navbars/navbar5";
import SaaSClassicNavbar from "../../../lib/organisms/components/navbars/navbar7";
import CryptoNavbar from "../../../lib/organisms/components/navbars/navbar6";
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
            <SaaS2Navbar {...props} />
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
            <CharityDrawerSection {...props} />
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
