import styled from "styled-components";

const Scroll = styled.div<{ headerHeight: number }>`
  overflow-y: scroll;
  height: ${({ headerHeight }) => `calc(100vh - ${50 + headerHeight}px)`};
  width: 100%;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #333;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0px;
    border: 1px solid #555;
  }
`;

export default Scroll;
