import styled from "styled-components";
import { themeGet } from "styled-system";
import BannerBG from "../../../../../assets/image/agency/agency-banner.png";
import BannerMaskImage from "../../../../../assets/image/agency/agency-banner-mask.png";

const BannerWrapper = styled.section`
  background-image: url(${BannerBG.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  @media only screen and (min-width: 1367px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 480px) {
    background-image: none !important;
    padding-top: 50px;
    padding-bottom: 60px;
  }
  .particle {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  .row {
    position: relative;
    z-index: 1;
  }
  .button__wrapper {
    margin-top: 40px;
    .reusecore__button {
      &:first-child {
        transition: all 0.3s ease;
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
    }
  }
`;

const BannerMask = styled.div`
  background-image: url(${BannerMaskImage.src});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding-top: 210px;
  padding-bottom: 160px;
  background-repeat: no-repeat;
  @media only screen and (max-width: 480px) {
    background: none;
    padding-top: 130px;
    padding-bottom: 60px;
  }
  img {
    max-width: 100%;
  }
`;

const DiscountLabel = styled.div`
  display: inline-block;
  border-radius: 4em;
  padding: 7px 25px;
  box-shadow: 0px 4px 50px 0px rgba(22, 53, 76, 0.08);
  margin-bottom: 30px;
  background-color: ${themeGet("colors.white", "#ffffff")};
  @media (max-width: 767px) {
    padding: 7px 10px;
  }
`;

const Hspace = styled.div`
  height: 100px;
  display: block;
`;

export { DiscountLabel, BannerMask, Hspace };

export default BannerWrapper;
