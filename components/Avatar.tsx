import styled from "styled-components";
import color from "interfaces/color";
import { contrastColor } from "scripts/color-functions";

const Text = styled.div<{ color?: color }>`
  background-color: ${({ color, theme }) =>
    color ? theme.palette[color].main : theme.palette.background.main};
  color: ${({ color, theme }) =>
    color ? contrastColor(theme.palette[color].main) : theme.palette.text.main};
  display: inline-block;
  padding: 0.4rem;
  border-radius: 50%;
`;

const Img = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

export default function Avatar({
  title,
  color,
}: {
  title: string;
  color?: color;
}): JSX.Element;
export default function Avatar({
  src,
  alt,
}: {
  src: string;
  alt: string;
}): JSX.Element;

/**
 * @example <Avatar src="path/to/img" alt="alt text" />
 * @example <Avatar title="AA" color="primary" />
 */
export default function Avatar({
  title,
  color,
  src,
  alt,
}: {
  title?: any;
  color?: any;
  src?: any;
  alt?: any;
}) {
  if (title) return <Text color={color}>{title}</Text>;
  return <Img src={src} alt={alt} />;
}
