import { GraphContent } from '@bcrumbs.net/bc-api';
import Link from 'next/link';
import FooterWrapper, { List, ListItem } from './style';
import { Container, Box, Heading ,Image,Text} from '../../../../atoms';
import { Logo } from '../../../../molecules';
import CopyrightSection from '../../navbars/navbar1/copyrights';
import withModelToDataObjProp from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
interface FooterProps {
  row?: object;
  col?: object;
  colOne?: object;
  colTwo?: object;
  titleStyle?: any;
  textStyle?: object;
  logoStyle?: object;
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
  isAR,
  data
}: FooterProps) => {
  return (
    <FooterWrapper id={model.name}>
      <Container>
        <Box className="row" {...row}>
          <Box {...colOne}>
            <Logo
              href="#"
              logoSrc={data.logoImage}
              title={data.title}
              logoStyle={logoStyle}
            />
            <Text content={data.email} {...textStyle} />
            <Text content={data.number} {...textStyle} />
            <Text content={data.address} {...textStyle} />
            <Text content={data.other} {...textStyle} />
            {/*<CopyrightSection model={socialModel} />*/}
          </Box>
          {/* End of footer logo column */}

          <Box
            {...colTwo}
            style={{ flexDirection: isAR ? 'row-reverse' : 'row' }}
          >
            {model.children &&
              model.children
                .filter((m) => m.online)
                .map((footer, index) => {
                  const footerItemMap = footer.data.reduce(function (map, obj) {
                    map[obj.Key] = obj.Value;
                    return map;
                  }, {});

                  return (
                    <Box key={'FooterItem' + index} className="col" {...col}>
                      <Heading
                        content={footerItemMap.title}
                        {...titleStyle}
                        style={{ textAlign: isAR ? 'right' : 'left' }}
                      />
                      <List>
                        {footer.children &&
                          footer.children.map((menuItems, subIndex) => {
                            let menuItemMap = menuItems.data.reduce(function (
                              map,
                              obj
                            ) {
                              map[obj.Key] = obj.Value;
                              return map;
                            },
                            {});
                            return (
                              <ListItem
                                key={`list__item-${subIndex}`}
                                style={{ textAlign: isAR ? 'right' : 'left' }}
                              >
                                {menuItemMap && menuItemMap.url ? (
                                  <Link href={menuItemMap.url}>
                                    <a className="ListItem">
                                      {menuItemMap.text}
                                    </a>
                                  </Link>
                                ) : null}
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
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '23%'],
    mt: [0, '13px'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '77%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: '#343d48',
    fontSize: '16px',
    fontWeight: '700',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
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
