import styled from 'styled-components';
import { themeGet } from 'styled-system';
import BannerBG from '../../../../assets/image/crypto/main_bg.svg';

const BannerWrapper = styled.section`
  padding-top: 210px;
  padding-bottom: 400px;
  background-image: url(${BannerBG});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    padding-bottom: 305px;
  }
  @media (max-width: 990px) {
    padding-top: 150px;
    padding-bottom: 210px;
  }
  @media (max-width: 768px) {
    background-image: none;
    background-color: #6d4efe;
  }

  @media only screen and (max-width: 480px) {
    padding-top: 130px;
    padding-bottom: 110px;
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
      border-radius: 6px;
      &:first-child {
        transition: all 0.3s ease;
        margin-right: 30px;
        @media (max-width: 990px) {
          margin-right: 0;
        }
        &:hover {
          box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
        }
      }
      &:nth-child(2) {
        padding-left: 0;
        @media (max-width: 1100px) {
          padding-left: 15px;
        }

        @media (max-width: 480px) {
          padding-left: 0;
          padding-top: 15px;
        }
        margin-top: 15px;
        .btn-text {
          font-weight: 700;
          margin-top: 7px;
        }
        .btn-icon {
          margin-top: 6px;
          margin-left: 6px;
        }
      }
      > a {
        font-weight: 700;
        color: #fff;
      }
    }
    .btnWithoutColor {
      margin-right: 15px !important;
      padding: 5px 0px !important;
      .btn-icon {
        svg {
          width: 30px;
          height: 30px;
        }
      }
      .btn-text {
        padding-left: 15px;
        font-size: 15px;
        font-weight: 500 !important;
        font-family: 'Poppins', sans-serif;
      }
      &:hover {
        box-shadow: none !important;
      }
    }
  }
`;
export const BgImageWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  img {
    width: 100%;
    height: auto;
    display: block;
    margin: -2px -1px;
    @media (max-width: 480px) {
      margin: -2px -1px;
    }
  }
`;
export const TestimonialSecWrapper = styled.section`
  padding: 0;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  z-index: 1;
  margin-top: -130px;
  @media (min-width: 1600px) {
    margin-top: -180px;
  }
  @media (max-width: 1200px) {
    margin-top: -80px;
  }
  @media (max-width: 990px) {
    margin-top: -40px;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
  @media (max-width: 575px) {
    padding-left: 15px;
    padding-right: 15px;
    padding: 60px 0 0;
  }
  .glide--carousel {
    display: flex;
    flex-direction: column;
    .glide__track {
      order: 2;
    }
    .glide__bullets {
      .glide__bullet {
        border-radius: 50%;
        background-color: rgb(20, 227, 186);
        opacity: 0.231;
        transition: all 0.2s ease;
        &.glide__bullet--active {
          background-color: rgb(20, 227, 186);
          width: 24px;
          height: 8px;
          border-radius: 15px;
          opacity: 1;
        }
      }
    }
    .glide__slide {
      p {
        @media (max-width: 480px) {
          margin-right: 30px;
          margin-left: 5px;
          max-width: 320px;
        }
      }
    }
  }
  .testimonial_item {
    max-width: 440px;
    @media (max-width: 480px) {
      max-width: 100%;
    }
  }
`;

export const TestimonialItem = styled.div`
  padding: 30px 0;
  background-color: #fff;
  transition: 0.425s ease;
  @media (max-width: 1300px) {
    padding: 20px 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-basis: 50px;
  display: block;
  border-radius: 10px;
  overflow: hidden;
  margin-right: 15px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default BannerWrapper;
