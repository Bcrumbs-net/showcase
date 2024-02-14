import styled, { css, keyframes } from 'styled-components';
import { themeGet } from 'styled-system';
import mapImage from '../../../../assets/image/charity/map-alt.png';

const SectionWrapper = styled.div<{ background?: string }>`
  width: 100%;
  padding: 100px 0 100px;
  background-color: ${themeGet('colors.heading', '#333333')};
  background-image: url(${props =>
    props.background ? props.background : mapImage.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

export const ContentArea = styled.div`
  .single-contact {
    background: #282828 none repeat scroll 0 0;
    padding: 40px 0;
    border-radius: 10px;
    margin-bottom: 20px;
    height: 270px;
    .contact-icon {
      background: #fff none repeat scroll 0 0;
      border-radius: 50%;
      color: #000;
      float: left;
      height: 60px;
      line-height: 50px;
      margin-left: 30px;
      margin-right: 20px;
      text-align: center;
      width: 60px;
      font-size: 20px;
    }
    .contact-content {
      color: #a8a8a8;
      padding-left: 100px;
      > h3 {
        color: ${themeGet('colors.white', '#ffffff')};
        font-size: 30px;
      }
    }
  }

  > p {
    color: ${themeGet('colors.white', '#ffffff')};
    font-size: 18px;
    @media only screen and (max-width: 1440px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1360px) {
      font-size: 15px;
    }
    @media only screen and (max-width: 991px) {
      line-height: 30px;
    }
  }
`;

export const Heading = styled.h2`
  font-size: 40px;
  line-height: 70px;
  font-weight: 300;
  margin: 0 auto 30px;
  text-align: center;
  color: ${themeGet('colors.white', '#ffffff')};
  @media only screen and (max-width: 1440px) {
    font-size: 36px;
    line-height: 54px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 34px;
    line-height: 52px;
    margin-bottom: 25px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 30px;
    line-height: 46px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: 40px;
  }

  span {
    color: ${themeGet('color.primary', '#FCF22B')};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 56px;
  @media only screen and (max-width: 1360px) {
    margin-top: 50px;
  }
  @media only screen and (max-width: 991px) {
    margin-top: 40px;
    align-items: flex-start;
    flex-direction: column;
  }
  @media only screen and (min-width: 481px) and (max-width: 667px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
  }
  @media only screen and (max-width: 480px) {
    margin-top: 30px;
  }

  .learn__more-btn {
    color: ${themeGet('color.primary', '#FCF22B')} !important;

    &::before {
      background-color: rgba(255, 255, 255, 0.1) !important;
    }

    .hyphen {
      background-color: ${themeGet('color.primary', '#FCF22B')}!important;
    }

    &:hover {
      color: ${themeGet('colors.heading', '#060F1E')}!important;

      &::before {
        background-color: ${themeGet('color.primary', '#FCF22B')}!important;
      }

      .hyphen {
        background-color: ${themeGet('colors.heading', '#060F1E')}!important;
      }
    }

    &.alt {
      color: ${themeGet('colors.heading', '#060F1E')}!important;

      &::before {
        width: 100%;
        background-color: ${themeGet('color.primary', '#FCF22B')}!important;
      }

      .hyphen {
        background-color: ${themeGet('colors.heading', '#060F1E')}!important;
      }
    }
  }

  p {
    margin: 0;
    color: ${themeGet('colors.white', '#ffffff')};
    font-size: 14px;
    font-weight: 700;
    padding: 0 22px;
    @media only screen and (max-width: 991px) {
      padding: 7.5px 0;
      opacity: 0;
    }
    @media only screen and (min-width: 481px) and (max-width: 667px) {
      padding: 0 20px;
      opacity: 1;
    }
  }
`;

export const RequiredFields = styled.div<{ isAR?: boolean }>`
  display: flex;
  flex-direction: column;
  label {
    margin: 10px 0 20px 0;
    padding: 0 5px;
    position: relative;
    font-size:21px;
    font-weight: 600;
    &.required-label {
      ${props => props.isAR ? `
        &::before {
          content: '* ';
          color: red;
          position: absolute;
          top: 0;
          left: -10px;
        }
      ` : `
        &::after {
          content: ' *';
          color: red;
          position: absolute;
          top: 0;
          right: -10px;
        }
      `}
  }
 }
`;
export const ContactForm = styled.form<{ isAR?: boolean }>`
  ${props => props.isAR ? `
    text-align: right;
      ` : `
    text-align: left;
  `}
  padding: 50px;
  border-radius: 10px ;
  background-color: ${themeGet('colors.white', '#ffffff')};
  height: 100%;
  .success{
    color: green;
    font-size: 24px; 
    font-weight: 600;
    margin-top:30px;

  }
  .failure{
    color: red;
    font-size: 24px; 
    font-weight: 600;
    margin-top:30px;
  }
.label{
  margin-bottom:20px;
  padding: 0 5px;
  font-size:21px;
  font-weight: 600;

}
  @media only screen and (max-width: 1440px) {
    padding: 50px 45px;

  }
  @media only screen and (max-width: 1360px) {
    padding: 50px 45px;

  }
  @media only screen and (max-width: 991px) {
    padding: 10px 20px;

  }
  @media only screen and (max-width: 480px) {
    margin-top: 20px;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    padding: 0 20px;
    border: 2px solid  #adadad;
    border-right-width: 1px;
    border-radius: 10px;
    color: #294859;
    margin: 10px 0 30px 0;
    @media only screen and (max-width: 1440px) {
      font-size: 14px;
      height: 60px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
    }

    &::placeholder {
      color: #616970;
    }

    @media only screen and (max-width: 1360px) {
      padding: 0 15px;
      font-size: 15px;
      height: 56px;
    }
    @media only screen and (max-width: 991px) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 10px;
    }
  }
  textarea {
    width: 100%;
    max-width: 100%;
    height: 150px;
    font-size: 16px;
    font-weight: 600;
    padding: 20px;
    border: 2px solid  #adadad;
    border-right-width: 1px;
    border-radius: 10px;
    color: #294859;    
    margin: 10px 0 30px 0;
    @media only screen and (max-width: 1440px) {
      font-size: 14px;
      height: 60px;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
    }

    &::placeholder {
      color: #616970;
    }

    @media only screen and (max-width: 1360px) {
      padding: 0 15px;
      font-size: 15px;
      height: 56px;
    }
    @media only screen and (max-width: 991px) {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 10px;
    }
  }

  .select_wrapper {   
    ${props => props.isAR ? `
      direction: rtl;
        ` : `
      direction: ltr;
   `}
    margin: 10px 0 30px 0;
    @media only screen and (max-width: 1360px) {
      width: 100%;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
    .current_option {
      @media only screen and (max-width: 1360px) {
        height: 56px;
      }
      @media only screen and (max-width: 991px) {
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      }
      .text {
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
          margin-right: 10px;
        }
      }
      svg {
        @media only screen and (max-width: 1360px) {
          width: 12px;
          height: auto;
        }
      }
    }
    .dropdown {
      @media only screen and (max-width: 1360px) {
        top: 56px;
      }
      @media only screen and (max-width: 991px) {
        border-radius: 5px;
      }
    }
  }
  .checkbox_group{
    margin: 10px 0 30px 0;
    label {
      margin:0px 10px 0px 10px;
    }
  }
  .radio_group {   
    margin: 10px 0 30px 0;
    @media only screen and (max-width: 480px) {
      flex-direction: column;
      margin: 0;
    }

    label {
      margin:0px 10px 0px 10px;
      @media only screen and (max-width: 1360px) {
        padding: 10px 15px;
      }
      @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 10px 0;
      }
      &.active {
        border-color: ${themeGet('colors.primary', '#FCF22B')};
        background-color: ${themeGet('colors.primary', '#FCF22B')};
      }

      h4 {
        font-size: 20px;
        font-weight: 600;
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
          margin-bottom: 5px;
        }
        @media only screen and (max-width: 1360px) {
          font-size: 15px;
        }
      }

      p {
        color: ${themeGet('colors.text', '#294859')};
        font-size: 14px;
        @media only screen and (max-width: 1360px) {
          font-size: 13px;
        }
      }
    }
  }
`;

export const SubmitButton = styled.button<{ isLoading?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  border: 0;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  color: ${themeGet('colors.white', '#ffffff')};
  background-color: ${themeGet('colors.primary', '#1C7C0C')};
  position: relative;
  overflow: hidden;
  z-index: 0;
  margin: 40px 0 0 0;
  text-transform: uppercase;

  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    height: 60px;
  }

  @media only screen and (max-width: 1360px) {
    font-size: 16px;
    height: 56px;
  }

  @media only screen and (max-width: 991px) {
    font-size: 14px;
    height: 54px;
    border-radius: 5px;
  }

  @media only screen and (max-width: 480px) {
    margin: 20px 0;
  }

  img {
    margin-left: 13px;
  }

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    background: repeating-linear-gradient(
      -45deg,
      ${({ theme }) => theme.colors.secondary || '#117600'},
      ${({ theme }) => theme.colors.secondary || '#117600'} 10px,
      ${({ theme }) => theme.colors.secondaryHover || '#FF282F'} 10px,
      ${({ theme }) => theme.colors.secondaryHover || '#FF282F'} 20px
    );
    transition: all 0.45s ease;

    @media only screen and (max-width: 1440px) {
      background: repeating-linear-gradient(
        -45deg,
        ${({ theme }) => theme.colors.secondary || '#117600'},
        ${({ theme }) => theme.colors.secondary || '#117600'} 8px,
        ${({ theme }) => theme.colors.secondaryHover || '#FF282F'} 8px,
        ${({ theme }) => theme.colors.secondaryHover || '#FF282F'} 16px
      );
    }
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5; 
      &:hover {
        &::before {
          left: -100%;
          opacity: 0;
          visibility: hidden;
        }
      }
    `}

  &:hover {
    &::before {
      left: 0;
      opacity: 0.2;
      visibility: visible;
    }
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white || '#ffffff'};
  border-top-color: transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
export default SectionWrapper;
