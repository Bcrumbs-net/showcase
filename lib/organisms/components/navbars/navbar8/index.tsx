import { useContext } from "react";
import { Image, DrawerContext, Container } from "../../../../atoms";
import { Logo } from "../../../../molecules";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavbarWrapper, { MenuWrapper, Button } from "./style";
import withModelToDataObjProp, { convertDataModelToDataObject } from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";
import { NavbarDataType } from "../../../types/navbarTypes";

interface NavbarProps {
  model: GraphContent;
  isAR: boolean;
  data: NavbarDataType;
}
const Navbar = ({ model, isAR, data }: NavbarProps) => {

  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  return (
    <NavbarWrapper className="navbar" id={model.name}>
      <Container fullWidth={true}>
        <Logo
          href="/charity"
          logoSrc={data.logoSrc}
          className="logo"
          title={data.logoTitle}
        />
        <MenuWrapper>
          <AnchorLink
            className="smooth_scroll"
            href={data.jumpToSectionLink}
            offset={81}
          >
            {data.jumpToSectionLabel}
          </AnchorLink>
          <Button>
            <span className="text">{data.ctaLabel}</span>
            <Image src={data.backgroundImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default withModelToDataObjProp(Navbar);
