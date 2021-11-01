import Masonry from "components/Masonry";
import Row from "components/Row";
import ToolCard from "components/ToolCard";
import tool from "interfaces/tool";
import React from "react";

export default function ShowAll({
  tools,
  searchValue,
}: {
  tools: tool[];
  searchValue: string;
}) {
  return (
    <Masonry>
      {tools
        .filter((item) =>
          `${item.name} ${item.description}`.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <ToolCard tool={item} key={item.id} />
        ))}
    </Masonry>
  );
}
