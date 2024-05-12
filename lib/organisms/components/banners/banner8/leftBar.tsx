import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface LeftBarProps {
  sectionId: string;
  offset: number;
  onClick?: () => void;
  text: string;
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
