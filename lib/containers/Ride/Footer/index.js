import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Box, Text, Heading, Image, Container, Button, Select } from '../../../atoms';
import SocialProfile from '../SocialProfile';
import FooterWrapper from './footer.style';
import { SOCIAL_PROFILES } from '../../../data/Portfolio/data';
import AppImage from './footerapp.svg';
import PlaystoreImage from './footerplay.svg';

const Footer = ({ row, col, colOne, colTwo, titleStyle, model }) => {
  let data = model.data.reduce(function (map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  let langs = [];
  let menus = [];
  if (model.children && model.children.length > 0) {
    model.children.forEach(footerModel => {
      if (footerModel.children && footerModel.children.length > 0) {
        if (footerModel.modelId === 403326) {
          langs = footerModel.children.map(lang => {
            let langMap = lang.data.reduce(function (map, obj) {
              map[obj.Key] = obj.Value;
              return map;
            }, {});
            return langMap;
          });
        } else if (footerModel.modelId === 403314) {
          menus = footerModel.children;
        }
      }
    });
  }

  return (
    <FooterWrapper id="footerSection">
      <Container noGutter mobileGutter width="1200px">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Heading content={data.name} {...titleStyle} />
            <Select
              //  options={Language_NAMES}
              options={langs}
              placeholder="English"
              className="Language_search_select"
              aria-label="language switcher"
            />
            <Heading
              content="Download The App"
              {...titleStyle}
              className="appDownload"
            />
            <Box className="imageWrapper">
              <Link href={data.androidAppUrl}>

                <Image src={AppImage} alt="App Image" />

              </Link>
              <Link href={data.appleAppUrl}>

                <Image src={PlaystoreImage} alt="PlaystoreImage Image" />

              </Link>
            </Box>
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {menus.map((menu, index) => {
              let footerMenu = menu.data.reduce(function (map, obj) {
                map[obj.Key] = obj.Value;
                return map;
              }, {});
              return (
                <Box className="col" {...col} key={`feature-${index}`}>
                  <Heading content={footerMenu.label} {...footerMenu} />
                  <list>
                    {menu.children &&
                      menu.children.map((menuItem, index) => {
                        let subMenu = menuItem.data.reduce(function (map, obj) {
                          map[obj.Key] = obj.Value;
                          return map;
                        }, {});

                        return (
                          <Link
                            href={subMenu.value || '#'}
                            key={'FooterLink' + index}
                            className="ListItem">
                            {subMenu.text}
                          </Link>
                        );
                      })}
                  </list>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="row copyRight" {...row}>
          <Text
            content="Copyright 2018 @Godrive Corporation."
            className="copyRightText"
          />
          <SocialProfile
            className="footer_social"
            items={SOCIAL_PROFILES}
            iconSize={18}
          />
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px'],
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Poppins',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Lato',
  },
};

export default Footer;
