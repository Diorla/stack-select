import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main}80;
  min-height: 100vh;
  width: 100%;
`;

export default Container;
