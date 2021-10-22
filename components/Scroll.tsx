import styled from "styled-components";

const Scroll = styled.div<{ offset: number }>`
  flex-direction: row;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: ${({ offset }) => `calc(100vh - ${offset}rem)`};
`;

export default Scroll;
