import styled from 'styled-components';
import { themeGet } from 'styled-system';

const SectionWrapper = styled.section<{ marginTop?: string | number, xlRowCount?: string | number, lgRowCount?: string | number, mdRowCount?: string | number, smRowCount?: string | number, xsRowCount?: string | number, xlItemHeight?: string | number, lgItemHeight?: string | number, mdItemHeight?: string | number, smItemHeight?: any, xsItemHeight?: any, showTabs?: boolean }>`
  padding: ${(props) =>
    (props.marginTop ? `${props.marginTop}px` : '40px')} 0
    40px 0;
  @media (max-width: 990px) {
    padding: ${(props) =>
    (props.marginTop ? `${props.marginTop}px` : '80px')} 0
      40px 0;
  }
  @media (max-width: 575px) {
    ${(props) =>
    (props.marginTop ? `${props.marginTop}px` : '60px')} 0 40px 0;
  }

  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .update-screen-tab {
    border: 0;
    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container {
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        background: #e7e8eb;
        display: block;
        left: 0;
        bottom: 0;
        z-index: -1;
      }
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll {
          width: 100%;
          text-align: center;
          .rc-tabs-nav {
            float: none;
            display: block;
            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 18px;
        color: #6f7a87;
        font-weight: 600;
        min-width: 230px;
        padding: 25px 10px 25px 10px;
        text-align: center;
        margin-right: 0;
        transition: 0.25s ease-in-out;

        &:hover {
          color: #2eb582;
        }
        &:after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:after {
          background: #2eb582;
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
          box-shadow: 0px 5px 60px 0px rgb(27 67 111 / 15%);
          color: #2eb582;
          /*border: 2px solid #2eb582;
          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }*/
        }
        > div {
          margin-right: 8px;
        }
        @media (max-width: 1199px) {
          font-size: 16px;
          padding: 0 0 20px 0;
          min-width: 170px;
        }
        @media (max-width: 990px) {
          min-width: auto;
          padding: 0 20px 15px 20px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          svg {
            width: 20px;
          }
        }
      }
    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        padding: 40px 20px 0;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  .rc-tabs-tab-prev-icon,
  .rc-tabs-tab-next-icon {
    font-size: 20px;
    color: #2eb582;
    line-height: 1;
    display: block;
  }

  .feature__block {
    &.blog__post {
      border-radius: 5px;
      position: relative;
      width: calc(100% / ${(props) =>
    props.xlRowCount} - 24px);
      height: ${(props) =>
    props.xlItemHeight}px;
      margin: 0 12px 70px;
      transition: all 0.3s ease;
      @media only screen and (max-width: 1200px) {
        width: calc(100% / ${(props) =>
    props.lgRowCount} - 24px);
        height: ${(props) =>
    props.lgItemHeight}px;
        margin-bottom: 44px;
      }
      @media only screen and (max-width: 991px) {
        width: calc(100% / ${(props) =>
    props.mdRowCount} - 24px);
        margin-bottom: 44px;
        height: ${(props) =>
    props.mdItemHeight}px;
        /*&:first-child {
          width: 100%;
        }*/
      }
      @media only screen and (max-width: 767px) {
        width: calc(100% / ${(props) =>
    props.smRowCount} - 24px);
        height: ${(props) =>
    props.smItemHeight}px;
        margin-bottom: 64px;
      }
      @media only screen and (max-width: 619px) {
        height: ${(props) =>
    props.smItemHeight / 1.25}px;
      }
      @media only screen and (max-width: 519px) {
        height: ${(props) =>
    props.smItemHeight / 1.5}px;
      }
      @media only screen and (max-width: 419px) {
        width: calc(100% / ${(props) =>
    props.xsRowCount} - 24px);
        height: ${(props) =>
    props.xsItemHeight}px;
        margin-bottom: 84px;
      }
      @media only screen and (max-width: 319px) {
        margin-bottom: 100px;
        height: ${(props) =>
    props.xsItemHeight / 1.5}px;
      }
      @media only screen and (max-width: 219px) {
        margin-bottom: 100px;
        height: ${(props) =>
    props.xsItemHeight / 2}px;
      }
      .icon__wrapper {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        &.gatsby-image-wrapper {
          height: 100%;
        }
        img {
          width: 100%;
          /*height: 100%;*/
          object-fit: cover;
        }
      }
      .content__wrapper {
        position: absolute;
        bottom: -60px;
        width: 100%;
        padding: 25px;
        h2 {
          text-align: center;
          color: ${themeGet('colors.primary', '#117600')};
          font-size: 24px;
          @media (max-width: 1199px) {
            font-size: 20px;
          }
          @media (max-width: 990px) {
            font-size: 18px;
          }
          @media (max-width: 767px) {
            font-size: 16px;
          }
        }
      }
    }
  }
  .rc-tabs-bar,
  .rc-tabs-nav-container {
    display: ${(props) =>
    (props.showTabs ? 'block' : 'none')};
  }
`;

SectionWrapper.defaultProps = {

  xlRowCount: 3,
  lgRowCount: 3,
  mdRowCount: 2,
  smRowCount: 2,
  xsRowCount: 1,
  xlItemHeight: 200,
  lgItemHeight: 150,
  mdItemHeight: 180,
  smItemHeight: 180,
  xsItemHeight: 200,
  showTabs: true,
};

export default SectionWrapper;
