import styled from 'styled-components';

const BCLinkWrapper = styled.div`
  position: fixed !important;
  z-index: 2147483647 !important;
  top: auto !important;
  right: 10px !important;
  bottom: 10px !important;
  left: auto !important;
  opacity: 0.8;
  background-color: #fff !important;
  border-radius: 3px !important;
  padding: 4px !important;
  text-decoration: none !important;
  transform: none !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  overflow: visible !important;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  a {
    cursor: pointer;
    font-size: 12px !important;
    line-height: 14px !important;
    color: #aaadb0 !important;
  }
  img {
    margin-bottom: -3px;
  }
`;

export default BCLinkWrapper;
