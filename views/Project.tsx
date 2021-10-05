import React, { useState } from "react";
import SidebarStacks from "./SidebarStacks";
import ProjectInfo from "./ProjectInfo";
import SidebarTools from "./SidebarTools";

export default function Project({
  goBack,
  id,
}: {
  goBack: () => void;
  id: string;
}) {
  const [stackId, setStackId] = useState("");
  return (
    <>
      <ProjectInfo goBack={goBack} id={id} />
      <SidebarTools
        visible={!!stackId}
        stackId={stackId}
        goBack={() => setStackId("")}
        projectID={id}
      />
      <SidebarStacks visible={!stackId} openTools={(val) => setStackId(val)} />
    </>
  );
}
