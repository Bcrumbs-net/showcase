import styled from 'styled-components';
// import { themeGet } from 'styled-system';

export const BannerSectionWrapper = styled.section`
  margin: 70px 0 40px 0;
  height: auto;
  position: relative;
  /*overflow: hidden;*/
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  .glide__controls {
    text-align: center;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export default BannerSectionWrapper;
