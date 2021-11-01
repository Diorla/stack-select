import Masonry from "components/Masonry";
import Row from "components/Row";
import StackCard from "components/StackCard";
import stack from "interfaces/stack";
import React from "react";

export default function StackListRender({
  stacks,
  searchValue,
}: {
  stacks: stack[];
  searchValue: string;
}) {
  return (
    <Masonry>
      {stacks
        .filter((item) =>
          `${item.name} ${item.description}`.toLowerCase().includes(searchValue)
        )
        .map((item) => (
          <StackCard stack={item} key={item.id} />
        ))}
    </Masonry>
  );
}
