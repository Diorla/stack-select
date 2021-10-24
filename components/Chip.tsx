import color from "interfaces/color";
import { contrastColor } from "scripts/color-functions";
import styled from "styled-components";

const StyledChip = styled.div<{ color: color }>`
  color: ${({ theme, color }) => contrastColor(theme.palette[color].main)};
  background-color: ${({ theme, color }) => theme.palette[color].main};
  padding: 0.2rem;
  align-items: center;
  display: inline-flex;
  border-radius: 0.8rem;
`;

export default function Chip({
  value,
  icon,
  color = "primary",
  style,
}: {
  value: string;
  icon?: React.ReactNode;
  color?: color;
  style?: React.CSSProperties;
}) {
  return (
    <StyledChip color={color} style={style}>
      {value}
      {icon}
    </StyledChip>
  );
}
