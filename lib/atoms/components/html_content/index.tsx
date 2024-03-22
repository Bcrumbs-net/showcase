import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ height?: string }>`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  height: ${(props) => props.height || '150px'};
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
`;

const HtmlContent = ({ htmlContent, height }) => {
  return (
    <Container height={height}>
      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Container>
  );
};

export default HtmlContent;