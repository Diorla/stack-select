import React from "react";
import styled from "styled-components";

const Icon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.elevation[3]};
  }
  &:active {
    box-shadow: ${({ theme }) => theme.elevation[1]};
  }
`;

const ActiveIcon = styled(Icon)`
  background: black;
  color: white;
  & > *: {
    color: white;
  }
`;

export default function SidebarIcon({
  active,
  icon,
}: {
  active?: boolean;
  icon: React.ReactNode;
}) {
  if (active) return <ActiveIcon>{icon}</ActiveIcon>;
  return <Icon>{icon}</Icon>;
}
