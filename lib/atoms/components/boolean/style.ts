import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center !important;
`;

export const BooleanFieldStyle = styled.input.attrs({ type: 'checkbox' })`
  width:10% !important;
  height:21px !important;
`;

export const Label = styled.span`
  margin-top:-20px;
`;
export const RequiredAsterisk = styled.span`
  margin-top:-20px;
  color: red;
  margin-left: 4px;
`;
