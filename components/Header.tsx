import styled from "styled-components";

const Header = styled.div<{ headerHeight: number }>`
  height: ${({ headerHeight }) => headerHeight + "px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default Header;
