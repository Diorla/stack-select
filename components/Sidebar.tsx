import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import SidebarIcon from "./SidebarIcon";
import Pile from "./Pile";
import Link from "next/link";

export default function Sidebar({
  activePath,
}: {
  activePath: "home" | "stack" | "tool" | "settings";
}) {
  return (
    <Pile>
      <Link href="/">
        <a>
          <SidebarIcon icon={<FaHome />} active={activePath === "home"} />
        </a>
      </Link>
      <Link href="/stack">
        <a>
          <SidebarIcon
            icon={<GrStackOverflow />}
            active={activePath === "stack"}
          />
        </a>
      </Link>
      <Link href="/tool">
        <a>
          <SidebarIcon icon={<FaTools />} active={activePath === "tool"} />
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <SidebarIcon
            icon={<MdSettings />}
            active={activePath === "settings"}
          />
        </a>
      </Link>
    </Pile>
  );
}
