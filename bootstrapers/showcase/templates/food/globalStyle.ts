import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from 'styled-system';
import Line from './dotted-line.png';

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Citrus Gothic';
    src: url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/CitrusGothic-Regular.eot'); /* IE9 Compat Modes */
    src: url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/flexslider-icon.eot') format('embedded-opentype'), /* IE6-IE8 */
        url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/CitrusGothic-Regular.woff2') format('woff2'), /* Super Modern Browsers */
        url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/CitrusGothic-Regular.woff') format('woff'), /* Pretty Modern Browsers */
        url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/flexslider-icon.ttf')  format('truetype'), /* Safari, Android, iOS */
        url('https://cdn.dconfig.com/globalresources/29/Resources/fonts/CitrusGothic-Regular.svg') format('svg'); /* Legacy iOS */
  }

  body{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }

  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Citrus Gothic','droid-sans', cursive;
    margin-top: 0;
  }

  h2 {
    color: ${themeGet('colors.primary', '#117600')};
    text-transform: capitalize;
    margin-bottom: 23px;
    font-size: 65px;
    font-family: 'Citrus Gothic','droid-sans', cursive;
  }

  section {
    position: relative;
  }

  a {
    color: #023E03;
  }
  .drawer-content-wrapper{
    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 500;
            color: #343d48;
            position: relative;
            font-family: 'Raleway', sans-serif;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
            &:before{
              content: '';
              position: absolute;
              width: calc(100% - 8px);
              height: 11px;
              background: #c2c7fb;
              bottom: 2px;
              left: -4px;
              z-index: -1;
              transform: scaleX(0);
              transform-origin: right center 0;
              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
            }
          }
          &.is-current {
            a {
              &:before {
                transform: scaleX(1);
                transform-origin: left center 0;
                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
        font-family: 'Raleway', sans-serif;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: #023E03;
        transform: rotate(45deg);
        display: block;
      }
    }
  }
  .reuseModalHolder{
    border: none !important;
    background-color: transparent !important;
    overflow: visible;
    .innerRndComponent{
      overflow: visible;
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
    }
  }
  .rc-tabs-bar, .rc-tabs-nav-container{
    overflow: visible !important;
    .rc-tabs-nav-wrap{
      overflow: visible !important;
    }
  }

  .foodModalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 80px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 30px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  background: url(${themeGet(
    'backgrounds.pageBackground',
    'https://cdn.dconfig.com/globalresources/29/Resources/background1943-8952.jpg'
  )}) !important;
  overflow: hidden;
  .sticky-inner-wrapper {
    z-index: 1000000;
  }
  .sticky-nav-active {
    .food_navbar {
      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);
      padding: 15px 0;
      .logo {
        padding: 0;
        position: absolute;
        top: 0;
        padding-left: 70px;
      }
      @media (max-width: 990px) {
        .menuWrapper {
          flex-direction: row-reverse;
        }
        .logo {
          padding-left: 0px;
        }
      }
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
    }
  }

  .food_navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 28px 0 28px 0;
    .logo {
      padding: 0;
      position: absolute;
      top: 0;
      padding-left: 70px;
    }
    @media (max-width: 990px) {
      padding: 20px 0;
      .menuWrapper {
        flex-direction: row-reverse;
      }
      .logo {
        padding-left: 0px;
      }
    }
    .logo-alt {
      display: none;
    }
    .main_menu {
      flex-direction: row;
      -ms-flex-direction: row;
      /*margin-left: auto !important;*/
      display: flex;
      display: -ms-flexbox;
      padding-left: 250px;
      list-style: none;
      flex-wrap: wrap;
      li {
        font-family: 'Citrus Gothic';
        display: inline-block;
        padding-left: 23px;
        padding-right: 30px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: #fff;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
        }
        a {
          padding: 5px;
          font-size: 20px;
          font-weight: 500;
          color: #fff;
          position: relative;
          transition: 0.15s ease-in-out;
          &:hover {
            color: #fff;
            &:after {
              transform: scaleX(1);
              transform-origin: left center 0;
              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
            }
          }
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: #fff;
            bottom: 0px;
            left: 0;
            z-index: -1;
            transform: scaleX(0);
            transform-origin: right center 0;
            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      button {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .process_item_col {
    &:nth-child(2),
    &:nth-child(3) {
      .process_item {
        &:before {
          content: '';
          background-image: url(${
            // @ts-ignore
            Line
          });
          width: 165px;
          height: 35px;
          display: block;
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          left: -165px;
          top: 20px;
          @media (max-width: 990px) {
            width: 100px;
            left: -80px;
          }
          @media (max-width: 767px) {
            display: none;
          }
        }
      }
    }
    &:nth-child(3) {
      .process_item {
        &:before {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const PrevButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #023e03;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #023e03;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(-45deg);
      top: -4px;
      left: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(45deg);
      width: 8px;
      bottom: -6px;
      left: 1px;
    }
  }
`;

export const NextButton = styled.div`
  position: relative;
  padding: 18px 10px;
  cursor: pointer;
  &:hover {
    span {
      background: #023e03;
      @media (min-width: 991px) {
        width: 100px;
      }
    }
  }
  span {
    width: 18px;
    height: 2px;
    background: #023e03;
    display: block;
    position: relative;
    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    &:before,
    &:after {
      content: '';
      display: block;
      height: 2px;
      border-radius: 2px;
      background: inherit;
      position: absolute;
    }
    &:before {
      transform: rotate(45deg);
      top: -4px;
      right: 0;
      width: 10px;
    }
    &:after {
      transform: rotate(-45deg);
      width: 8px;
      bottom: -6px;
      right: 1px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;
