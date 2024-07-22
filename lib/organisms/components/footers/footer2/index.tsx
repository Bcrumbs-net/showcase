import FooterWrapper, { List, ListItem } from './style';
import { Container, Box, Heading, Text } from '../../../../atoms';
import { Logo } from '../../../../molecules';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';
import { GraphContent } from '@bcrumbs.net/bc-api';

interface FooterProps {
  row: object;
  col: object;
  colOne: object;
  colTwo: object;
  titleStyle?: object;
  textStyle?: object;
  logoStyle?: object;
  contentStyle?: object;
  copyrightMenu?: object;
  copyright?: object;
  model: GraphContent;
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
  copyrightMenu,
  copyright,
  model,
  data,
}: FooterProps) => {
  let footerItems;
  if (model.children && model.children.length > 0) {
    footerItems = model.children.map((footerData) => {
      let footerMap = footerData.data.reduce(function (map, obj) {
        map[obj.Key] = obj.Value;
        return map;
      }, {});
      return footerMap;
    });
  }
  return (
    <FooterWrapper>
      <Container>
        <Box className="row" {...row}>
          {/* End of footer logo column */}
          <Box {...colOne}>
            {model.children?.map((widget) => (
              <Box className="col" {...col} key={widget.id}>
                <Heading content={widget.name} {...titleStyle} />
                <List>
                  {widget.children &&
                    widget.children
                      .filter((m) => m.online)
                      .map((item, subIndex) => {
                        const itemMap = convertDataModelToDataObject(
                          item
                        ) as Record<string, string>;
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
            ))}
          </Box>
          <Box {...colTwo} className="copyrightClass">
            <Logo
              href={data.href}
              logoSrc={data.logo}
              title={data.title}
              logoStyle={logoStyle}
            />
            <Box {...copyrightMenu} className="copyrightMenu">
              <a href={data.helpUrl}>
                <Text content="Help" {...textStyle} />{' '}
              </a>
              <a href={data.PrivacyUrl}>
                <Text content="Privacy" {...textStyle} />{' '}
              </a>
              <a href={data.TermsUrl}>
                <Text content="Terms" {...textStyle} />
              </a>
            </Box>
            <Box {...copyright} className="copyrightText">
              <Text content={data.copyRight} {...textStyle} />
            </Box>
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
  colTwo: {
    mt: [0, '13px'],
    mb: ['0px', 0],
    pl: ['15px', 0],
    pt: ['35px', '55px'],
    pr: ['15px', '15px', 0],
    borderTop: '1px solid',
    borderColor: 'rgba(0,0,0,0.102)',
    flexBox: true,
    flexWrap: 'wrap',
    width: ['100%'],
  },
  // Footer col two style
  colOne: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%', '25%'],
    pl: ['15px', '0px'],
    pr: ['15px', '0px'],
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
    width: 'auto',
    mb: ['15px', 0],
  },
  // widget text default style
  textStyle: {
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mr: '30px',
  },
  copyrightMenu: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: [0, '40px'],
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    mb: ['15px', 0],
  },
  copyright: {
    ml: [0, 0, 0, 'auto', 'auto'],
    color: '#20201d',
    fontSize: '14px',
    mb: '10px',
    mt: '3px',
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default withModelToDataObjProp(Footer);
