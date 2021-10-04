import styled from "styled-components";
import Pile from "components/Pile";

const SidebarDropdown = styled(Pile)<{ visible: boolean }>`
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.palette.background.main};
  width: 100%;
  box-shadow: ${({ theme }) => theme.elevation[3]};
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

export default SidebarDropdown;
