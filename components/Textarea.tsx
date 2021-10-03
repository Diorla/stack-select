import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.2rem;
  border: 1px solid ${({ theme }) => theme.palette.background.shade};
  margin: 0.1rem;
  outline: none;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.palette.text.shade};
  }
`;

export default Textarea;
