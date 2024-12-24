import styled from 'styled-components';

const MarkdownPageSectionWrapper = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 120px 0;
  overflow: hidden;
  line-height: 2em;

  @media (max-width: 990px) {
    padding: 80px 0;
  }
  @media (max-width: 767px) {
    padding: 70px 0 60px 0;
  }

  h1, p {
    display: block;
    width: 100%;
    margin-bottom: 1em; /* Optional: Add space between elements */
  }
`;

export default MarkdownPageSectionWrapper;
