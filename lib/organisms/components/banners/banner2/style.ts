import styled from 'styled-components';
import Mail from './images/mail.svg';
import BannerPattern from './images/pattern.png';
export const DiscountWrapper = styled.div`
  text-align: left;
`;
export const ButtonWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 991px) and (min-width: 767px) {
    display: flex;
    .reusecore__button {
      padding-left: 0;
      padding-right: 0;
      &.withoutBg {
        margin-left: 25px;
        &:hover {
          background: transparent !important;
          box-shadow: none !important;
        }
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    .reusecore__button {
      width: 100%;
      &.withoutBg {
        border: 0;
      }
    }
  }
`;
export const EmailInputWrapper = styled.div`
  position: relative;
  width: 85%;
  @media (max-width: 768px) {
    width: 100%;
  }

  &::before {
    content: url(${Mail.src});
    display: block;
    position: relative;
    width: 22px;
    left: 22px;
    top: 46px;
    z-index: 9;
  }
  input {
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08) !important;
    border: 0 !important;
    margin-bottom: 30px;
    height: 60px;
    padding-left: 60px !important;
    color: #343d48;
    opacity: 1;
    font-weight: 500;
    @media (max-width: 768px) {
    }
    &:focus {
      border: 0;
      box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.08);
    }

    &:placeholder {
      font-size: 16px;
      color: #343d48;
      opacity: 1;
    }
  }
  .input-icon {
    left: 10px !important;
    right: auto;
    top: 7px !important;
    height: 46px !important;
    svg {
      color: #ececec;
      width: 24px;
      height: 30px;
    }
  }
`;

export const DiscountLabel = styled.div`
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  border-radius: 4em;
  padding: 10px 24px 0 6px;
  box-shadow: 0px 7px 25px 0px rgba(22, 53, 76, 0.05);
  margin-bottom: 30px;
  background-color: #fff;
  height: 45px;
  @media (max-width: 990px) {
    margin-top: 50px;
  }
  @media (max-width: 420px) {
    padding: 10px;
  }
  span {
    @media (max-width: 420px) {
      font-size: 12px;
    }
  }
  .discountAmount {
    padding: 9px 21px;
    border-radius: 28px;
    text-transform: uppercase;
    @media (max-width: 420px) {
      padding: 8px 16px;
      font-size: 10px;
    }
  }
`;

export const BannerSquareShape = styled.div`
  width: 980px;
  height: 1110px;
  background: #1a73e8;
  border-radius: 50px;
  -webkit-transform: rotate(105deg);
  -ms-transform: rotate(105deg);
  transform: rotate(107deg);
  position: absolute;
  left: 58%;
  top: -28%;
  z-index: -1;
  pointer-events: none;
  background-image: url(${BannerPattern.src});
  @media (max-width: 1300px) {
    width: 870px;
    height: 1000px;
    transform: rotate(103deg);
    position: absolute;
    left: 64%;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const BannerCircleShape = styled.div`
  width: 500px;
  height: 500px;
  background: #ffc845;
  border-radius: 50%;
  position: absolute;
  left: 55%;
  top: 47%;
  z-index: -1;
  transform: translateY(-50%);
  pointer-events: none;
  @media (max-width: 1300px) {
    width: 400px;
    height: 400px;
    left: 63%;
  }
  @media (max-width: 1100px) {
    width: 400px;
    height: 400px;
    left: 60%;
  }
  @media (max-width: 991px) {
    width: 345px;
    height: 345px;
    left: 54%;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
