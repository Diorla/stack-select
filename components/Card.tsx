import color from "interfaces/color";
import styled from "styled-components";

const Card = styled.div<{ elevation: number; color?: color }>`
  box-shadow: ${({ theme, elevation }) => theme.elevation[elevation]};
  background-color: ${({ theme, color }) =>
    color ? theme.palette[color].main + "33" : "white"};
`;

export default Card;
