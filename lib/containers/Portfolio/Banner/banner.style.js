import styled from 'styled-components';

const BannerWrapper = styled.section`
  position: relative;
  background-color: #030b16;
  display: flex;
  align-items: center;
  padding-top: 80px;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const PortfolioLink = styled.div`
  margin-top: 36px;
  @media (max-width: 990px) {
    margin-bottom: 25px;
  }
  @media (max-width: 575px) {
    margin-bottom: 15px;
  }
  a {
    font-size: 16px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    color: #3444f1;
    position: relative;
    z-index: 3;
    cursor: pointer;
    @media (max-width: 990px) {
      font-size: 15px;
    }
    @media (max-width: 575px) {
      font-size: 14px;
    }
  }
`;

export default BannerWrapper;
