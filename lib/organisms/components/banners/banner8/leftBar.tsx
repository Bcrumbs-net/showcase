import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LeftBarProps {
  sectionId: object;
  offset: object;
  onClick: object;
  text: object;
}
const LeftBar = ({ sectionId, offset, onClick, text }: LeftBarProps) => {
  return (
    <div className="leftbar">
      <AnchorLink
        className="smooth_scroll"
        href={sectionId}
        offset={offset}
        onClick={onClick}
      >
        <i className="flaticon-left-arrow" />
        <span className="btn_text">{text}</span>
      </AnchorLink>
    </div>
  );
};

export default LeftBar;
