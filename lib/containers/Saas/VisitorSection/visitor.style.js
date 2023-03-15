import styled from 'styled-components';

const VisitorSectionWrapper = styled.section`
  min-height: 630px;
  display: flex;
  align-items: center;
  padding-bottom: 40px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    min-height: 500px;
    padding-bottom: 45px;
  }
  @media only screen and (max-width: 991px) {
    min-height: 370px;
    padding-bottom: 40px;
  }
  @media (max-width: 767px) {
    min-height: auto;
    display: block;
  }
`;

const SectionObject = styled.div`
  position: absolute;
  width: 55%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 767px) {
    width: 100%;
    position: relative;
    height: auto;
    top: auto;
    left: auto;
  }
  img {
    max-width: 93%;
    height: auto;
  }
  .objectWrapper {
    margin-right: auto;
    position: relative;
    .dashboardWrapper {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 4vw;
      left: 0;
      display: flex;
      justify-content: center;
      align-self: center;
      align-items: center;
    }
  }
`;

export { SectionObject };

export default VisitorSectionWrapper;
