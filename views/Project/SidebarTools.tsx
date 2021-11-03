import Section from "components/Section";
import ToolItem from "components/ToolItem";
import { useUser } from "context";
import project from "interfaces/project";
import React, { useState } from "react";
import toggleItemInList from "scripts/toggleItemInList";
import createProject from "services/createProject";
import ToolHeader from "./ToolHeader";
import selectItems from "scripts/selectItems";

function getFilteredState(totalArr: any[], currentArr: any[]) {
  if (totalArr.length <= 2)
    return {
      disabled: true,
      title: "Filter",
    };
  if (currentArr.length < 2)
    return {
      disabled: false,
      title: "Filter",
    };
  return {
    disabled: false,
    title: "Clear",
  };
}
export default function SidebarTools({
  stackId,
  currentProject,
  resetStackId,
  hideFilter,
  onClick,
}: {
  stackId: string;
  currentProject?: project;
  resetStackId: () => void;
  hideFilter?: boolean;
  onClick: () => void;
}) {
  const {
    tools,
    stacks,
    user: { uid },
  } = useUser();
  const currentStack = stacks.filter((stack) => stack.id === stackId)[0];
  const allTools = tools.filter((tool) => tool.stackId === stackId);
  const [filteredIds, setFilteredIds] = useState<string[]>([]);

  const filterTwoStack = () => {
    // if the tools is already less than 2, no need to filter
    if (!(allTools.length <= 2)) {
      // if it is already filtered
      if (filteredIds.length >= 2) setFilteredIds([]);
      else {
        const weights = allTools.map((item) => item.rating ** 3 + 1);
        const stackTools = selectItems(allTools, weights, 2);
        setFilteredIds(stackTools.map((item) => item.id));
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

  const filterInfo = getFilteredState(allTools, filteredIds);
  console.log({ filteredIds });
  const isProject = !!currentProject;
  return (
    <Section
      headerHeight={isProject ? 210 : 140}
      header={
        <ToolHeader
          setSearch={setSearch}
          goBack={resetStackId}
          currentStack={currentStack}
          isProject={isProject}
          filterTwo={filterTwoStack}
          filterInfo={filterInfo}
          hideFilter={hideFilter}
          onClick={onClick}
        />
      }
      style={{ flex: 3 }}
    >
      {allTools
        .filter((item) =>
          `${item.name} ${item.description}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .filter((item) =>
          filteredIds.length ? filteredIds.includes(item.id) : true
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
