import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top:10px;
  margin-bottom:10px;
  height: 150px; 
  overflow-y: auto; 
  border: 1px solid #ccc;
  padding: 10px;
`;

const RichTextBox = ({ htmlContent }) => {
  return (
    <Container>
      {/* Render HTML content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </Container>
  );
};

export default RichTextBox;
