import React from 'react';
import Link from 'next/link';
import { Box, Text, Heading, Container } from '../../../../atoms';
import { Logo } from '../../../../molecules';
import FooterWrapper, {
  CopyrightText,
  SocialList,
  SelectWrapper,
  List,
  ListItem,
} from './style';
import { socialLinks } from '../../../../data/Charity';
import { GraphContent } from '@bcrumbs.net/bc-api';
import withModelToDataObjProp, {
  convertDataModelToDataObject,
} from '../../../../../bootstrapers/showcase/utils/withModelToDataObjProp';

interface FooterProps {
  row: object;
  col: object;
  colOne: object;
  colTwo: object;
  model: GraphContent;
  isAR: boolean;
  data: Record<string, string>;
}
const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  model,
  isAR,
  data,
}: FooterProps) => {
  let footerItems;
  if (model.children && model.children.length > 0) {
    footerItems = model.children.map((footerData) => {
      const footerMap = convertDataModelToDataObject(footerData) as Record<
        string,
        string
      >;
      return footerMap;
    });
  }
  return (
    <FooterWrapper>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col-one" {...colOne}>
            <Logo
              className="logo"
              href="/charity"
              logoSrc={data.logo}
              title={data.title}
            />
            <Text className="text" content={data.phone1} />
            <Text className="text" content={data.phone2} />
            <Link href={data.label_url} className="mail">
              {data.label}
            </Link>
            <SelectWrapper>
              <select aria-label="language switcher">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="german">German</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.994"
                height="21.991"
                viewBox="0 0 21.994 21.991"
              >
                <path
                  d="M424,10280a10.931,10.931,0,0,1,2.3-6.712,11.244,11.244,0,0,1,1.255-1.372,10.982,10.982,0,0,1,14.843-.046c.173.157.338.322.5.49l.17.179a11.007,11.007,0,0,1,2.061,3.187v0l.058.023.034.186h-.008a10.921,10.921,0,0,1,.726,2.993c.031.315.049.636.052.956,0,.039,0,.075,0,.113a11.22,11.22,0,0,1-.17,1.922c-.039.22-.085.437-.137.653A11,11,0,0,1,424,10280Zm2.071-4.7-.362.439v.315a10.088,10.088,0,0,0,17.116,10.31h-.333v-.672l-.385-.516v-.809l-.294-.292-.026-.336.375-.713-.71-1.25.085-.85-.638-.064-.235-.235h-.429l-.217.2h-.754l-.026.066h-.418l-.963-1.1.008-.857.158-.057.059-.328h-.225l-.093-.344,1.116-.806v-.57l.545-.3.222.023h.449l.351-.19,1.131-.086v.579l.894.225.176.126h.165v-.314l.514-.052.491.366h.806l.054-.052c-.08-.271-.17-.537-.271-.8l-.527.008-.263-.289-.052-.465-.269.147-.145.568-.39-.416-.018-.393-.377-.323-.139-.14h-.436l.139.391.524.294.093.1-.114.057.005.311-.256.105-.22-.049-.137-.191.356.019.1-.13-.788-.531-.059-.226-.32.287-.325-.064-.493.641-.1.253-.315.028-.467,0-.279-.132-.083-.556.1-.266.475-.1.519.1.062-.284-.22-.055.075-.446.522-.083.367-.514.377-.064.338.049h.127l-.07-.483-.413.168-.145-.361-.24-.033-.046-.248.2-.215.465-.181.121-.214a10.063,10.063,0,0,0-12.593-.592l.509,0,.227.127.429.093.034.165.679.026-.093-.217-.6-.019.142-.132-.049-.16H429.8l.594-.444h.571l.269.37.444.025.269-.261.2.1-.369.361-.486.008a1.813,1.813,0,0,1,.041.352l.62-.016.067-.168.426-.025.052-.251-.251-.044.083-.225.194-.057.669.031-.369.336.059.261.387.057-.026-.468.369-.193.653-.075.948.419v.361l.3.075-.152.286h-.426l-.127.325-.979-.229.77-.411-.294-.247-.661.082-.059.06h0l-.01.016-.189.2-.315.028.023.157.111.044-.005.052-.256.039-.018.147-.245.013-.044-.295-.442.132-.9.527.1.369.251.165.5.07v.57l.232-.036.214-.447.535-.17V10273l.3-.225.718.168-.049.452h.191l.529-.259.026.6.385.232-.018.354-.367.126.023.116.447.2-.01.243-.129.013v-.008l-.56-.173-.026-.181.165-.111v-.165l-.178-.044-.044.152-.307.047-.031-.011v.016l-.108.016-.085-.176-.1-.044h-.22l-.1.08v.181l.191.064.183.026-.041.018-.168.188-.075-.093-.165-.044-.447.421.059.047-.661.366-.62.646-.041.286-.622.408-.31.313.034.62-.426-.2,0-.364-1.191,0-.617.31-.269.493-.1.393.173.38.486.06.772-.517.067.256-.235.444.586.1.059.906.8.137.511-.589.622.124.217.3.6-.036.016-.176.328.158.367.581.638.008.235.41.034.5.705.269.888.008.261.426.393.127-.075.354-.431.548-.127,1.214-.39.31-.579-.018-.194.336.145.63-.63.806-.2.369-.6.287-.4.06-.015.167.276.078-.034.181-.248.24.152.188.3.008-.016.232-.08.225-.026.184.442.372-.059.193-.6-.011-.6-.521-.467-.818.065-.791-.351-.47.142-.795-.209-.06v-1.729s-.586-.441-.62-.441-.31-.077-.31-.077l-.059-.328-.764-.956.077-.343.023-.561.529-.372-.077-.628-.77-.059-.6-.687-.429-.116-.276-.049.034-.253-.351-.05v.143l-.881-.22-.354-.54.142-.266-.558-.813-.093-.594h-.227l.075.578.387.6-.044.232-.325-.049-.4-.685v-.8l-.418-.2v-.573c.046-.11.1-.22.146-.327-.051.108-.1.217-.148.327v-.315l.362-.439.421-.509-.018-.184.015.184-.418.509Zm18.714,2.42.072.135Zm-.865-1.779.2-.025.106,0-.106,0Zm-12.784-.149h.323l.145-.145v0l-.147.145h-.32Zm-.6-.24.178.093.426-.6-.426.6Zm1.317.025h.32v0Zm-.511-.2.189-.033.152-.1v0l-.152.1-.189.033Zm.535-.269.124.1.121-.1-.121.1Zm.245,0-.152-.1h0Zm-.61-.145.207-.052Zm-.937-.064.227.064h.6v0h-.6Zm.741-.145h0v-.119h0Zm-1.312-.757.163.336Zm11.9-.2.044.145.692,0,.2-.294-.2.294-.692,0ZM430.5,10273.927Zm-1.433-.986.1.111.5-.031s.008-.095.008-.159c0,.064-.008.159-.008.159l-.5.031Zm0-.39h.5l.1-.14v0l-.1.14Zm4.347,2.673.093-.119.127.1-.021.146-.209.019Zm.465.031h-.067v-.15h.287l.062-.152.114,0,.132.025-.057.116-.142.013-.028.14-.111.069-.178.014C433.886,10275.285,433.881,10275.255,433.881,10275.255Zm5.891-.8.034-.349.245-.052-.021-.163-.23-.142-.158-.108v-.16l.093-.143.331-.067.083.4.178.284.116.137.214.08-.2.24-.39.039Zm-.674-.135v-.209l.2-.323.271-.064.194.083-.018.22-.413.294Z"
                  transform="translate(-424.002 -10269.002)"
                />
              </svg>
            </SelectWrapper>
          </Box>
          {/* End of logo column */}
          <Box className="col-two" {...colTwo}>
            {model.children?.map((menuItem) => {
              const itemMenuMap = convertDataModelToDataObject(
                menuItem
              ) as Record<string, string>;
              return (
                <Box
                  className="col"
                  {...col}
                  key={`footer__widget-key${menuItem.id}`}
                >
                  <Heading
                    className="widget_title"
                    as="h3"
                    content={itemMenuMap.text}
                  />
                  <List>
                    {menuItem.children?.map((submenuItem) => {
                      const subItemMenuMap = convertDataModelToDataObject(
                        submenuItem
                      ) as Record<string, string>;
                      return (
                        <ListItem key={`list__item-${submenuItem.id}`}>
                          <a href={subItemMenuMap.link}>
                            {subItemMenuMap.text}
                          </a>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              );
            })}
          </Box>
          {/* End of List column */}
        </Box>
        {/* End of widgets row */}
        <Box className="row copyright" {...row}>
          <CopyrightText>
            <Text
              className="text"
              content="© 2019 RedQ Inc. All Rights Reserved"
            />
          </CopyrightText>
          <SocialList>
            {socialLinks.map((item) => (
              <li className={item.name} key={`social__link-key${item.id}`}>
                <Link href={item.link} aria-label="social share link">
                  {item.icon}
                </Link>
              </li>
            ))}
          </SocialList>
        </Box>
        {/* End of copyright row */}
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
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default withModelToDataObjProp(Footer);
