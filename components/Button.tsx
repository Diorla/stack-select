import styled from 'styled-components';
import { contrastColor } from 'scripts/color-functions';
import color from 'interfaces/color';
type variant = 'outlined' | 'contained' | 'text';

const Styled = styled.button`
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: Uppercase;
`;

const Contained = styled(Styled)<{ color?: color }>`
  background-color: ${({ color, theme }) => color && theme.palette[color].main};
  color: ${({ color, theme }) =>
    color && contrastColor(theme.palette[color].main)};
  box-shadow: ${({ theme }) => theme.elevation[1]};
  &:hover {
    box-shadow: ${({ theme }) => theme.elevation[3]};
  }
  &:active{
    box-shadow: ${({ theme }) => theme.elevation[1]};
  }
  &:disabled {
    opacity: 0.6;
  }
`;

const Outlined = styled(Styled)<{ color?: color }>`
  border: 1px solid ${({ color, theme }) => color && theme.palette[color].main};
  color: ${({ color, theme }) => color && theme.palette[color].main};
  background-color: ${({ theme }) => theme.palette.default.main};
  &:hover {
    background-color: transparent;
  }
  &:active{
    color: ${({ color, theme }) => color && theme.palette[color].main};
    background-color: ${({ theme }) => theme.palette.default.light};
  }
  &:disabled {
    opacity: 0.6;
  }
`;

const Text = styled(Styled)<{ color?: color }>`
  color: ${({ color, theme }) => color && theme.palette[color].main};
  background-color: transparent;
  &:hover {
    background-color: transparent;
    background-color: ${({ theme }) => theme.palette.default.main};
  }
  &:active{
    color: ${({ color, theme }) => color && theme.palette[color].main};
    background-color: ${({ theme }) => theme.palette.default.light};
  }
  &:disabled {
    opacity: 0.6;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: color;
  variant?: variant;
}
export default function Button({
  children,
  variant,
  color,
  ...props
}: ButtonProps): JSX.Element {
  if (variant === 'outlined')
    return (
      <Outlined color={color} {...props}>
        {children}
      </Outlined>
    );
  if (variant === 'text')
    return (
      <Text color={color} {...props}>
        {children}
      </Text>
    );
  return (
    <Contained color={color} {...props}>
      {children}
    </Contained>
  );
}
