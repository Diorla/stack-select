import Button from "components/Button";
import Hidden from "components/Hidden";
import NavLink from "components/NavLink";
import Pile from "components/Pile";
import Row from "components/Row";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Text from "components/Text";
import { useUser } from "context";
import stack from "interfaces/stack";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import ToolForm from "views/Tools/ToolForm";

const Styled = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const Close = styled(MdClose)`
  font-size: 24px;
  cursor: pointer;
`;

export default function ToolHeader({
  setSearch,
  currentStack,
  goBack,
  isProject,
  filterTwo,
  filterInfo,
  hideFilter,
  onClick,
}: {
  setSearch: (arg: string) => void;
  currentStack: stack;
  goBack: () => void;
  isProject: boolean;
  filterTwo: () => void;
  filterInfo: {
    disabled: boolean;
    title: string;
  };
  hideFilter?: boolean;
  onClick: () => void;
}) {
  const {} = useUser();
  const { id: stackId, name } = currentStack;
  const [toolVisible, setToolVisible] = useState(false);

  return (
    <Pile style={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Pile style={{ alignItems: "center", width: "100%" }}>
        <Styled>
          <Link href={`/stack/${stackId}`} passHref>
            <NavLink>
              <Text variant="h3">{name}</Text>
            </NavLink>
          </Link>
          <Hidden lgUp>{onClick ? <Close onClick={onClick} /> : null}</Hidden>
        </Styled>
        {isProject ? (
          <Row style={{ width: "100%", justifyContent: "center" }}>
            <Button onClick={goBack} color="secondary" variant="text">
              Go back
            </Button>
          </Row>
        ) : null}
      </Pile>
      <SearchInput
        wrapperStyle={{ width: "clamp(180px, 80%, 320px)", marginBottom: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row style={{ width: "100%", justifyContent: "space-evenly" }}>
        <Button color="primary" onClick={() => setToolVisible(true)}>
          New Tool
        </Button>
        {hideFilter ? null : (
          <Button
            color="secondary"
            onClick={filterTwo}
            disabled={filterInfo.disabled}
          >
            {filterInfo.title}
          </Button>
        )}
      </Row>
      <SidebarDropdown visible={toolVisible}>
        {toolVisible && (
          <ToolForm
            initialValues={{
              name: "",
              description: "",
              rating: 0,
              id: "",
              modified: 0,
              stackId,
            }}
            onClose={() => setToolVisible(false)}
          />
        )}
      </SidebarDropdown>
    </Pile>
  );
}
