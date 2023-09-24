import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import FooterWrapper, { List, ListItem } from './style';
import LogoImage from '../../../assets/image/saas/logo.png';
import { Footer_Data } from '../../../../data/Saas';
import { Container,Text, Box, Heading } from '../../../../atoms';
import { Logo } from '../../../../molecules';

interface FooterProps {
  row?: object;
  col?: object;
  colOne?: object;
  colTwo?: object;
  titleStyle?: any;
  textStyle?: object;
  logoStyle?: object;
  model: any;
  isAR: boolean;
}
const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
  model,
  isAR,
}:FooterProps) => {
  const data = model.data.reduce(function(map, obj) {
    map[obj.Key] = obj.Value;
    return map;
  }, {});
  return (
    <FooterWrapper id={model.name}>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo href="/" logoSrc={data.logo} logoStyle={logoStyle} title={''} />
            <Text content={data.email} {...textStyle} />
            <Text content={data.phone} {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {model.children &&
              model.children
                .filter(m => m.online)
                .map((widget, index) => {
                  let widgetMap = widget.data.reduce(function(map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});
                  return (
                    <Box
                      className="col"
                      {...col}
                      key={`footer-widget-${index}`}
                    >
                      <Heading content={widgetMap.title} {...titleStyle} />
                      <List>
                        {widget.children &&
                          widget.children
                            .filter(m => m.online)
                            .map((item, subIndex) => {
                              let itemMap = item.data.reduce(function(
                                map,
                                obj
                              ) {
                                map[obj.Key] = obj.Value;
                                return map;
                              },
                              {});
                              return (
                                <ListItem key={`footer-list-item-${subIndex}`}>
                                  <a className="ListItem" href={itemMap.url}>
                                    {itemMap.title}
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
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default Footer;