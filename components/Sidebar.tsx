import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { GrStackOverflow } from "react-icons/gr";
import { MdSettings } from "react-icons/md";
import SidebarIcon from "./SidebarIcon";
import Stack from "./Stack";

export default function Sidebar({
  activePath,
}: {
  activePath: "home" | "stack" | "tool" | "settings";
}) {
  return (
    <Stack>
      <SidebarIcon icon={<FaHome />} active={activePath === "home"} />
      <SidebarIcon icon={<GrStackOverflow />} active={activePath === "stack"} />
      <SidebarIcon icon={<FaTools />} active={activePath === "tool"} />
      <SidebarIcon icon={<MdSettings />} active={activePath === "settings"} />
    </Stack>
  );
}
