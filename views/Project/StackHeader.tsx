import Button from "components/Button";
import Pile from "components/Pile";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Text from "components/Text";
import { useUser } from "context";
import React, { useState } from "react";
import StackForm from "views/Stacks/StackForm";

// TODO: Enable search to include tools
/**
 * For example, if you search "React" which is a tool, it should return stacks like "Frontend", "React State Management" etc
 * Check StackItem for StackTools, I could generate it here
 */
export default function StackHeader({
  setSearch,
}: {
  setSearch: (arg: string) => void;
}) {
  const [stackVisible, setStackVisible] = useState(false);

  return (
    <Pile style={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Text variant="h3">Stacks</Text>
      <SearchInput
        wrapperStyle={{ width: "clamp(180px, 80%, 320px)", marginBottom: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button color="primary" onClick={() => setStackVisible(true)}>
        New Stack
      </Button>
      <SidebarDropdown visible={stackVisible}>
        {stackVisible && (
          <StackForm
            initialValues={{
              id: "",
              name: "",
              description: "",
              modified: 0,
            }}
            onClose={() => setStackVisible(false)}
          />
        )}
      </SidebarDropdown>
    </Pile>
  );
}
