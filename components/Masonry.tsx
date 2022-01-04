import styled from "styled-components";

const Masonry = styled.div<{
  minWidth?: number;
  gap?: number;
  padding?: number;
}>`
  display: grid;
  grid-template-columns: ${({ minWidth = 300 }) =>
    `repeat(auto-fit, minmax(${minWidth}px, 1fr))`};
  gap: ${({ gap = 12 }) => `${gap}px`};
  padding: ${({ padding = 4 }) => `${padding}px`};
`;

export default Masonry;
