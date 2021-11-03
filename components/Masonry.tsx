import styled from "styled-components";

const Masonry = styled.div`
  column-count: 1;
  column-gap: 10px;
  margin: auto;

  & > div {
    break-inside: avoid;
  }
  @media (min-width: 640px) {
    column-count: 2;
  }
  @media (min-width: 780px) {
    column-count: 3;
  }
  @media (min-width: 1020px) {
    column-count: 4;
  }
`;

export default Masonry;
