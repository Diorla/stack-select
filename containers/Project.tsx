import React, { useState } from "react";
import SidebarStacks from "./SidebarStacks";
import SidebarTools from "./SidebarTools";
import ProjectInfo from "./ProjectInfo";

export default function Projects({ goBack }: { goBack: () => void }) {
  const [category, setCategory] = useState("");

  return (
    <>
      <ProjectInfo goBack={goBack} />
      <SidebarTools visible={!!category} goBack={() => setCategory("")} />
      <SidebarStacks
        visible={!category}
        openTools={() => setCategory("tool name")}
      />
    </>
  );
}
