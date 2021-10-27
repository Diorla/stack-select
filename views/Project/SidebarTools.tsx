import Section from "components/Section";
import ToolItem from "components/ToolItem";
import { useUser } from "context";
import project from "interfaces/project";
import React, { useEffect, useState } from "react";
import toggleItemInList from "scripts/toggleItemInList";
import createProject from "services/createProject";
import ToolHeader from "./ToolHeader";
import selectItems from "scripts/selectItems";
import tool from "interfaces/tool";

function getFilteredState(totalArr: any[], currentArr: any[]) {
  if (totalArr.length <= 2)
    return {
      disabled: true,
      title: "Filter",
    };
  if (currentArr.length <= 2)
    return {
      disabled: false,
      title: "Clear",
    };
  return {
    disabled: false,
    title: "Filter",
  };
}
export default function SidebarTools({
  stackId,
  currentProject,
  resetStackId,
  hideFilter,
}: {
  stackId: string;
  currentProject?: project;
  resetStackId: () => void;
  hideFilter?: boolean;
}) {
  const {
    tools,
    stacks,
    user: { uid },
  } = useUser();
  const currentStack = stacks.filter((stack) => stack.id === stackId)[0];
  const allTools = tools.filter((tool) => tool.stackId === stackId);
  const [stackTools, setStackTools] = useState(allTools);

  useEffect(() => {
    let mounted = true;
    if (mounted) setStackTools(allTools);
    return () => {
      mounted = false;
    };
  }, [
    allTools
      .map((item) => item.id)
      .sort((a, b) => (a > b ? 1 : -1))
      .join(""),
  ]);
  const filterTwoStack = () => {
    // if the tools is already less than 2, no need to filter
    if (!(allTools.length <= 2)) {
      // if it is already filtered
      if (stackTools.length <= 2) setStackTools(allTools);
      else {
        const weights = allTools.map((item) => item.rating ** 3 + 1);
        // console.log(weights);
        const stackTools = selectItems(allTools, weights, 2);
        setStackTools(stackTools as tool[]);
      }
    }
  };

  const [search, setSearch] = useState("");

  const toggleProjectTools = (id: string) => {
    if (currentProject) {
      const tools = toggleItemInList(currentProject.toolsId, id);
      createProject(uid, {
        ...currentProject,
        toolsId: tools,
      });
    }
  };

  const filterInfo = getFilteredState(allTools, stackTools);
  return (
    <Section
      headerHeight={210}
      header={
        <ToolHeader
          setSearch={setSearch}
          goBack={resetStackId}
          currentStack={currentStack}
          isProject={!!currentProject}
          filterTwo={filterTwoStack}
          filterInfo={filterInfo}
          hideFilter={hideFilter}
        />
      }
      style={{ flex: 3 }}
    >
      {stackTools
        .filter((item) =>
          `${item.name} ${item.description}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item) => (
          <ToolItem
            key={item.id}
            tool={item}
            onCheck={(id) => toggleProjectTools(id)}
            checked={currentProject?.toolsId.includes(item.id) || false}
            hideCheckbox={!currentProject}
          />
        ))}
    </Section>
  );
}
