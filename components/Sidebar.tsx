import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import SidebarIcon from "./SidebarIcon";
import Link from "next/link";
import styled from "styled-components";
import path from "interfaces/path";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40px;
  align-items: center;
`;

export default function Sidebar({ activePath }: { activePath: path }) {
  return (
    <Styled>
      <Link href="/">
        <a>
          <SidebarIcon icon={<FaHome />} active={activePath === "home"} />
        </a>
      </Link>
      <Link href="/stacks">
        <a>
          <SidebarIcon
            icon={<GrStackOverflow />}
            active={activePath === "stack"}
          />
        </a>
      </Link>
      <Link href="/tools">
        <a>
          <SidebarIcon icon={<FaTools />} active={activePath === "tool"} />
        </a>
      </Link>
    </Styled>
  );
}
