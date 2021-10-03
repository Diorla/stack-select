import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const Styled = styled.div`
  color: ${({ theme }) => theme.palette.text.shade};
  display: flex;
  align-items: center;
  border-radius: 0.4rem;
  background: white;
`;
const Input = styled.input`
  border: none;
  height: 100%;
  outline: none;
  font-size: 1.2rem;
  background: transparent;
  border-radius: 0.6rem;
`;

const Icon = styled(FaSearch)`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.2rem;
  background: transparent;
  border-radius: 0.6rem;
`;
export default function SearchInput() {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const border = isFocus ? "1px solid #999" : "1px solid #ccc";
  return (
    <Styled style={{ border }}>
      <Icon onClick={() => ref?.current?.focus()} />
      <Input
        type="search"
        placeholder="Search"
        ref={ref}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </Styled>
  );
}
