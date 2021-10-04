import color from "interfaces/color";
import styled from "styled-components";

const Divider = styled.div<{ size: number; color?: color }>`
  width: 100%;
  height: ${({ size }) => size}px;
  background-color: ${({ theme, color }) =>
    color ? theme.palette[color].main + "80" : theme.palette.background.shade};
`;

export default Divider;
