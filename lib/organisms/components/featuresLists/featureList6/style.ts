import styled from 'styled-components';
import { themeGet } from 'styled-system';

const AboutUsSectionWrapper = styled.section`
  padding: 0px;
  overflow: hidden;

  .col {
    align-self: center;
  }

  .group-gallery {
    box-shadow: none;
    display: flex;
    flex-wrap: wrap;
    img {
      max-width: 70%;
      height: auto;
      margin-bottom: 15px;
      object-fit: contain;
      /*box-shadow: 0px 0px 250px 0px rgba(39, 79, 117, 0.1);*/
    }
  }

  .feature__block {
    align-items: center;
    margin-bottom: 14px;
    .icon__wrapper {
      color: ${themeGet('colors.primary', '#10ac84')};
      margin: 0 10px;
    }
    .content__wrapper {
      h2 {
        margin-bottom: 0;
      }
    }
  }

  .reusecore__button {
    margin-top: 36px;
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0px 9px 20px -5px rgba(16, 172, 132, 0.57);
    }
  }
`;

export default AboutUsSectionWrapper;
