import Pile from "components/Pile";
import tool from "interfaces/tool";
import React from "react";
import SectionList from "./SectionList";

export default function Sectioned({
  tools,
  searchValue,
}: {
  tools: { [key: string]: tool[] };
  searchValue: string;
}) {
  const toolList = Object.keys(tools)
    .filter((item) => item !== "misc")
    .sort((prev, next) => (prev > next ? 1 : -1));
  return (
    <Pile style={{ flex: 1, justifyContent: "flex-start" }}>
      <SectionList
        stack="Misc"
        list={tools.misc.filter((item) =>
          `${item.name} ${item.description}`.toLowerCase().includes(searchValue)
        )}
      />
      {toolList.map((stack) => {
        const list = tools[stack].filter((item) =>
          `${item.name} ${item.description} ${stack}`
            .toLowerCase()
            .includes(searchValue)
        );
        return list.length ? <SectionList stack={stack} list={list} /> : null;
      })}
    </Pile>
  );
}
