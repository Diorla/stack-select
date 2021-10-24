import styled from "styled-components";

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.dark};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default NavLink;
