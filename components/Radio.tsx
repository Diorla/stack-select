import styled from "styled-components";

const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export default function Radio(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <Input type="radio" {...props} />;
}
