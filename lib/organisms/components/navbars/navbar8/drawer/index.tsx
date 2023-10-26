import React, { useState, useContext } from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Drawer, Image, DrawerContext } from "../../../../../atoms";
import InnerWrapper, { SpreadButton } from "./style";
import withModelToDataObjProp from "../../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";
import { GraphContent } from "@bcrumbs.net/bc-api";

interface DrawerSectionProps {
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const DrawerSection = ({ model, isAR, data }: DrawerSectionProps) => {
  const [toggleState, setToggleState] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: "TOGGLE",
    });
    handleActiveClass();
  };

  const scrollItems = [];

  model.children?.forEach((menuItem) => {
    const menu: Record<string, string> = menuItem.data.reduce(function (
      map,
      obj
    ) {
      map[obj.Key] = obj.Value;
      return map;
    },
    {});
    scrollItems.push(menu.path.slice(1));
  });

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          className={`drawer_btn ${toggleState ? "active" : ""}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <Scrollspy
          className="scrollspy__menu"
          items={scrollItems}
          offset={-81}
          currentClassName="active"
        >
          {model.children &&
            model.children
              .filter((m) => m.online)
              .map((menuItem, index) => {
                const menu: Record<string, string> = menuItem.data.reduce(
                  function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  },
                  {}
                );
                return (
                  <li key={`menu_key${index}`}>
                    <AnchorLink
                      href={menu.path}
                      offset={menu.offset}
                      onClick={handleDrawerToggle}
                    >
                      {menu.label}
                    </AnchorLink>
                  </li>
                );
              })}
        </Scrollspy>
        <SpreadButton>
          <span className="text">{data.buttonLabel}</span>
          <Image src={data.buttonImage} alt="Charity Landing" />
        </SpreadButton>
      </InnerWrapper>
    </Drawer>
  );
};

export default withModelToDataObjProp(DrawerSection);
