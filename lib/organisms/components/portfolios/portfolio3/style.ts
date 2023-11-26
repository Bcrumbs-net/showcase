import styled from 'styled-components';
import { themeGet } from 'styled-system';

const PortfolioSectionWrapper = styled.section`
  padding: 120px 0 40px;
  overflow: hidden;
  @media (max-width: 990px) {
    padding: 110px 0;
  }
  @media (max-width: 767px) {
    padding: 100px 0;
  }

  .feature__block {
    &.blog__post {
      border-radius: 5px;
      position: relative;
      width: calc(100% / ${props => // @ts-ignore
    props.xlRowCount} - 24px);
      height: ${props =>
    // @ts-ignore
    props.xlItemHeight}px;
      margin: 0 12px 70px;
      transition: all 0.3s ease;
      @media only screen and (max-width: 1200px) {
        width: calc(100% / ${props =>// @ts-ignore
    props.lgRowCount} - 24px);
        height: ${props =>// @ts-ignore
    props.lgItemHeight}px;
        margin-bottom: 44px;
      }
      @media only screen and (max-width: 991px) {
        width: calc(100% / ${props =>// @ts-ignore
    props.mdRowCount} - 24px);
        margin-bottom: 44px;
        height: ${props => // @ts-ignore
    props.mdItemHeight}px;
        /*&:first-child {
          width: 100%;
        }*/
      }
      @media only screen and (max-width: 767px) {
        width: calc(100% / ${props =>// @ts-ignore
    props.smRowCount} - 24px);
        height: ${props => // @ts-ignore
    props.smItemHeight}px;
        margin-bottom: 64px;
      }
      @media only screen and (max-width: 619px) {
        height: ${props => // @ts-ignore
    props.smItemHeight / 1.25}px;
      }
      @media only screen and (max-width: 519px) {
        height: ${props =>// @ts-ignore
    props.smItemHeight / 1.5}px;
      }
      @media only screen and (max-width: 419px) {
        width: calc(100% / ${props => // @ts-ignore
    props.xsRowCount} - 24px);
        height: ${props =>
    // @ts-ignore
    props.xsItemHeight}px;
        margin-bottom: 84px;
      }
      @media only screen and (max-width: 319px) {
        margin-bottom: 100px;
        height: ${props =>
    // @ts-ignore
    props.xsItemHeight / 1.5}px;
      }
      @media only screen and (max-width: 219px) {
        margin-bottom: 100px;
        height: ${props => // @ts-ignore
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
`;
PortfolioSectionWrapper.defaultProps = {
  // @ts-ignore
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
};

export default PortfolioSectionWrapper;
