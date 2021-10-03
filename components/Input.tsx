import styled from "styled-components";

const Input = styled.input`
  padding: 0.2rem;
  border: 1px solid ${({ theme }) => theme.palette.background.shade};
  margin: 0.1rem;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.text.shade};
  }
`;

export default Input;
