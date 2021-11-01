import color from "interfaces/color";
import Link from "next/link";
import React from "react";
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

const ChipLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;
export default function Chip({
  value,
  icon,
  color = "primary",
  style,
  href,
}: {
  value: string;
  icon?: React.ReactNode;
  color?: color;
  style?: React.CSSProperties;
  href?: string;
}) {
  return (
    <StyledChip color={color} style={style}>
      {href ? (
        <Link href={href} passHref>
          <ChipLink>{value}</ChipLink>
        </Link>
      ) : (
        value
      )}
      {icon}
    </StyledChip>
  );
}
