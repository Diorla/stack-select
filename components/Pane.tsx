import styled from "styled-components";

const Pane = styled.section`
  background: white;
  border-radius: 0.4rem;
  margin: 0.2rem;
  box-shadow: ${({ theme }) => theme.elevation[2]};
  min-height: calc(100vh - 4rem);
  margin-top: 0.4rem;
`;

export default Pane;
