import styled from 'styled-components';

const MarkdownPageSectionWrapper = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 120px 20px;
  overflow: hidden;
  line-height: 2em;

  @media (max-width: 990px) {
    padding: 80px 20px;
  }
  @media (max-width: 767px) {
    padding: 70px 20px 60px;
  }

  h1, p {
    display: block;
    width: 100%;
    margin-bottom: 1em; /* Optional: Add space between elements */
  }
`;

export default MarkdownPageSectionWrapper;
