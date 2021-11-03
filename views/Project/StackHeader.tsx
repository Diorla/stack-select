import Button from "components/Button";
import Hidden from "components/Hidden";
import Pile from "components/Pile";
import Row from "components/Row";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Text from "components/Text";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import StackForm from "views/Stacks/StackForm";

const Styled = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const Close = styled(MdClose)`
  font-size: 24px;
  cursor: pointer;
`;

// TODO: Enable search to include tools
/**
 * For example, if you search "React" which is a tool, it should return stacks like "Frontend", "React State Management" etc
 * Check StackItem for StackTools, I could generate it here
 */
export default function StackHeader({
  setSearch,
  onClick,
}: {
  setSearch: (arg: string) => void;
  onClick: () => void;
}) {
  const [stackVisible, setStackVisible] = useState(false);

  return (
    <Pile style={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Styled>
        <Text variant="h3">Stacks</Text>
        <Hidden lgUp>{onClick ? <Close onClick={onClick} /> : null}</Hidden>
      </Styled>
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
