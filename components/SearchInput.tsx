import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Styled = styled.div`
  color: ${({ theme }) => theme.palette.text.shade};
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  background: white;
  width: clamp(180px, 40%, 320px);
`;
const Input = styled.input`
  border: none;
  height: 100%;
  outline: none;
  font-size: 1.2rem;
  background: transparent;
  border-radius: 0.6rem;
  padding: 0.4rem 0.2rem;
`;

const Icon = styled.span`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.2rem;
  background: transparent;
  border-radius: 0.6rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperStyle?: React.CSSProperties;
}
export default function SearchInput(props: InputProps) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const border = isFocus ? "1px solid #999" : "1px solid #ccc";
  return (
    <Styled style={{ border, ...props.wrapperStyle }}>
      <Icon onClick={() => ref?.current?.focus()}>
        <FaSearch />
      </Icon>
      <Input
        {...props}
        placeholder="Search"
        ref={ref}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </Styled>
  );
}
