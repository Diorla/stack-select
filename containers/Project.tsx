import React, { useState } from "react";
import SidebarCategories from "./SidebarCategories";
import SidebarTools from "./SidebarTools";
import ProjectInfo from "./ProjectInfo";

export default function Projects({ goBack }: { goBack: () => void }) {
  const [category, setCategory] = useState("");

  return (
    <>
      <ProjectInfo goBack={goBack} />
      {category ? (
        <SidebarTools visible goBack={() => setCategory("")} />
      ) : (
        <SidebarCategories visible openTools={() => setCategory("tool name")} />
      )}
    </>
  );
}
