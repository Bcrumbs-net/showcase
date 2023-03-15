import styled from 'styled-components';
//import { themeGet } from 'styled-system';

const VideoSectionWrapper = styled.section`
  margin: 40px 0;
  height: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  .full-screen-video {
    width: 100%;
    visibility: visible;
  }
`;

export default VideoSectionWrapper;
