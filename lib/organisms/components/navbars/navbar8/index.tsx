import { useContext } from "react";
import { Image, DrawerContext, Container } from "../../../../atoms";
import { Logo } from "../../../../molecules";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavbarWrapper, { MenuWrapper, Button } from "./style";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface NavbarProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const Navbar = ({ model, isAR, data }: NavbarProps) => {
  const { state, dispatch } = useContext(DrawerContext);
  // Toggle drawer
  return (
    <NavbarWrapper className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/charity"
          logoSrc={data.logo}
          className="logo"
          title={data.title}
        />
        <MenuWrapper>
          <AnchorLink className="smooth_scroll" href="#donate" offset={81}>
            {data.anchorLinkLabel}
          </AnchorLink>
          <Button>
            <span className="text">{data.buttonLabel}</span>
            <Image src={data.buttonImage} alt="Charity Landing" />
          </Button>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default withModelToDataObjProp(Navbar);
