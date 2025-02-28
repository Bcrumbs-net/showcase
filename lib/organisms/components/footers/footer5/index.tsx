import React from "react";
import Link from "next/link";
import { Box, Text, Heading, Image, Container } from "../../../../atoms";
import FooterWrapper, { List, ListItem, BgImageWrapper } from "./style";
import AppImage from "./images/footerapp.svg";
import PlaystoreImage from "./images/footerplay.svg";
import FooterBG from "./images/footer-bg.svg";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FooterProps {
  row: object;
  col: object;
  colOne: object;
  colTwo: object;
  titleStyle: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  model,
  isAR,
  data,
}: FooterProps) => {
  return (
    <FooterWrapper id={model.name}>
      <BgImageWrapper>
        <Image src={FooterBG.src} alt="Footer background" />
      </BgImageWrapper>
      <Container noGutter mobileGutter width="1200px">
        <Box className="row mainRow" {...row}>
          <Box {...colOne}>
            {/*<Heading content="Language" {...titleStyle} />
            <Select
              options={Language_NAMES}
              placeholder="English"
              className="Language_search_select"
              aria-label="Language_search_input"
            />*/}
            <Heading
              content="Download The App"
              {...titleStyle}
              className="appDownload"
            />
            <Box className="imageWrapper">
              <Link href="#">

                <Image src={AppImage.src} alt="App Image" />

              </Link>
              <Link href="#">

                <Image src={PlaystoreImage.src} alt="PlaystoreImage Image" />

              </Link>
            </Box>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {model.children &&
              model.children.map((footer, index) => {
                const footerItemMap: Record<string, string> =
                  footer.data.reduce(function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});
                return (
                  <Box className="col" {...col} key={`list-${index}`}>
                    <Heading content={footerItemMap.text} {...titleStyle} />
                    <List>
                      {footer.children &&
                        footer.children.map((menuItems, subIndex) => {
                          const menuItemMap: Record<string, string> =
                            menuItems.data.reduce(function (map, obj) {
                              map[obj.Key] = obj.Value;
                              return map;
                            }, {});
                          return (
                            <ListItem key={`list__item-${subIndex}`}>
                              <a href={menuItemMap.url} className="ListItem">
                                {menuItemMap.text}
                              </a>
                            </ListItem>
                          );
                        })}
                    </List>
                  </Box>
                );
              })}
          </Box>
          {/* End of footer List column */}
        </Box>
        <Box className="row copyRight" {...row}>
          <Text
            content="Copyright 2018 @Crypto Corporation."
            className="copyRightText"
          />
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-4px",
    mr: "-4px",
  },
  // Footer col one style
  colOne: {
    width: ["100%", "30%", "33%", "33%"],
    mb: ["30px", 0],
    mt: [0, "10px"],
    pl: ["0px", 0],
    pr: ["0px", "0px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "70%", "67%", "67%"],
    mt: [0, "10px"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", 1 / 3, 1 / 3, 1 / 3],
    pl: [0, "15px"],
    pr: [0, "15px"],
    mb: ["30px", "30px"],
    mt: [0, "10px"],
  },
  // widget title default style
  titleStyle: {
    color: "#FFFFFF",
    fontSize: ["15px", "16px", "16px", "18px", "18px"],
    fontWeight: "600",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "30px"],
    fontFamily: "Poppins",
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#FFFFFF",
    fontSize: "16px",
    mb: "12px",
    fontWeight: "600",
    fontFamily: "Lato",
  },
};

export default withModelToDataObjProp(Footer);
