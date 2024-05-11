import React from 'react';
import Link from 'next/link';
import { Box, Text, Heading, Container } from '../../../../atoms';
import { Logo } from '../../../../molecules';
import FooterWrapper, { List, ListItem } from './style';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, { convertDataModelToDataObject } from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FooterProps {
  row: object;
  col: object;
  colOne: object;
  colTwo: object;
  titleStyle: object;
  logoStyle: object;
  textStyle: object;
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
  logoStyle,
  textStyle,
  model,
  data,
  isAR
}: FooterProps) => {
  return (
    <FooterWrapper>
      <Container className={"footer_container"}>
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={data.logo}
              title="Hosting"
              logoStyle={logoStyle}
            />
            <Text content={data.email} {...textStyle} />
            <Text content={data.phone} {...textStyle} />
          </Box>
          {/* End of footer logo column */}
          <Box {...colTwo}>
            {model.children.map((widget, index) => {
              const listMap = convertDataModelToDataObject(
                widget
              ) as Record<string, string>;
              return (
                <Box className="col" {...col} key={`footer-widget-${index}`}>
                  <Heading content={listMap.title} {...titleStyle} />
                  <List>
                    {widget.children.map((item, index) => {
                      const itemMenuMap = convertDataModelToDataObject(
                        item
                      ) as Record<string, string>;
                      return (
                        <ListItem key={`footer-list-item-${index}`}>
                          <Link href={itemMenuMap.Url}>
                            <a className="ListItem">{itemMenuMap.title}</a>
                          </Link>
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
    width: '130px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#0f2137',
    fontSize: '16px',
    mb: '10px',
  },
};

export default withModelToDataObjProp(Footer);
