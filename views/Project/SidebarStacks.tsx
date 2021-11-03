import Section from "components/Section";
import StackItem from "components/StackItem";
import { useUser } from "context";
import React, { useState } from "react";
import StackHeader from "./StackHeader";

export default function SidebarStacks({
  setStackId,
  onClick,
}: {
  setStackId: (id: string) => void;
  onClick: () => void;
}) {
  const { stacks } = useUser();
  const [search, setSearch] = useState("");
  return (
    <Section
      headerHeight={120}
      header={<StackHeader setSearch={setSearch} onClick={onClick} />}
      style={{ flex: 3 }}
    >
      {stacks
        .filter((item) =>
          `${item.name} ${item.description}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        .map((item) => (
          <StackItem
            key={item.id}
            openTools={() => setStackId(item.id)}
            stack={item}
          />
        ))}
    </Section>
  );
}
