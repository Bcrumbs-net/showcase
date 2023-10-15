import React, { Fragment } from "react";
import Link from "next/link";
import { Box, Text, Container } from "../../../../atoms";
import { FooterWrapper, Newsletter, FooterNav, FooterNavItem } from "./style";
import { GraphContent } from "@bcrumbs.net/bc-api";
import withModelToDataObjProp from "../../../../../bootstrapers/showcase/utils/withModelToDataObjProp";

interface FooterProps {
  row: object;
  col: object;
  titleStyle: object;
  linkStyle: object;
  newsletterButton: object;
  copyrightStyle: object;
  contactItem: object;
  flexBox: object;
  contactTitle: object;
  contactInfo: object;
  noMargin: object;
  autoMargin: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const Footer = ({
  row,
  col,
  titleStyle,
  linkStyle,
  newsletterButton,
  copyrightStyle,
  contactItem,
  flexBox,
  contactTitle,
  contactInfo,
  noMargin,
  autoMargin,
  model,
  isAR,
  data
}:FooterProps) => {
  return (
    <FooterWrapper id={model.name}>
      <Container noGutter mobileGutter width="1200px">
        {/*<Box {...row}>
          <Box {...col}>
            <Heading as="h3" content={data.title} {...titleStyle} />
            <Link href="#">
              <a>
                <Heading as="h3" content={data.subtitle} {...linkStyle} />
              </a>
            </Link>
          </Box>
          <Box {...col}>
            <Heading as="h3" content="A treat for your inbox" {...titleStyle} />
            <Newsletter>
              <Input
                inputType="email"
                placeholder="Email address"
                iconPosition="right"
                isMaterial={false}
                className="email_input"
                aria-label="email"
              />
              <Button {...newsletterButton} title="Subscribe" />
  </Newsletter>
          </Box>
        </Box>
*/}
        <Box {...row}>
          <Box {...col} {...flexBox}>
            <Box {...contactItem}>
              {data.email ? (
                <Fragment>
                  <Text content={data.emailText} {...contactTitle} />
                  <Text content={data.email} {...contactInfo} />
                </Fragment>
              ) : null}
            </Box>
            <Box {...contactItem}>
              {data.phone ? (
                <Fragment>
                  <Text content={data.phoneText} {...contactTitle} />
                  <Text content={data.phone} {...contactInfo} />
                </Fragment>
              ) : null}
            </Box>
            {/*<SocialProfile
              className="footer_social"
              //items={SOCIAL_PROFILES}
              model={model}
              iconSize={40}
            />*/}
          </Box>
          <Box {...col}>
            <FooterNav>
              {model.children &&
                model.children
                  .filter((m) => m.online)
                  .map((itemObj, index) => {
                    const item: Record<string, string> = itemObj.data.reduce(
                      function (map, obj) {
                        map[obj.Key] = obj.Value;
                        return map;
                      },
                      {}
                    );
                    return (
                      <FooterNavItem key={`footer-nav-item-${index}`}>
                        <Link href={item.path || "#"}>
                          <a>{item.label}</a>
                        </Link>
                      </FooterNavItem>
                    );
                  })}
            </FooterNav>
          </Box>
        </Box>

        <Box {...row} {...noMargin}>
          <Box {...autoMargin}>
            <Text
              as="span"
              content={`© ${new Date().getFullYear()} All rights reserved. `}
              {...copyrightStyle}
            />
            {/*
            <Link href="#">
              <a>
                {' '}
                <Text as="span" content=" RedQ, Inc." {...copyrightStyle} />
              </a>
            </Link>*/}
            {/*<Text
              as="span"
              content="Built & designed with"
              {...copyrightStyle}
            />
            <Icon icon={heart} size={14} className="heart_sign" />*/}
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "space-between",
    ml: "-15px",
    mr: "-15px",
    mb: ["0", "70px", "80px", "100px", "100px"],
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: "15px",
    pr: "15px",
    mb: ["40px", "0", "0", "0", "0", "0"],
  },
  titleStyle: {
    fontSize: ["16px", "18px"],
    fontWeight: "600",
    mb: ["20px", "25px"],
  },
  linkStyle: {
    fontSize: ["22px", "26px", "26px", "30px"],
    color: "#3444f1",
    mb: 0,
  },
  newsletterButton: {
    type: "button",
    fontSize: "16px",
    pl: "20px",
    pr: "20px",
    colors: "primary",
    minHeight: "auto",
  },
  copyrightStyle: {
    fontSize: "14px",
    color: "#fff",
  },
  flexBox: {
    flexBox: true,
    justifyContent: "space-between",
    // flexWrap: 'wrap'
  },
  contactItem: {
    // width: 1 / 2
  },
  contactTitle: {
    fontSize: ["15x", "15px", "16px", "16px", "16px"],
    mb: "10px",
  },
  contactInfo: {
    fontSize: ["16x", "16px", "18px", "18px", "20px"],
    fontWeight: "500",
    mb: 0,
  },
  noMargin: {
    mb: "0",
  },
  autoMargin: {
    m: "0 auto",
  },
};

export default withModelToDataObjProp(Footer);
