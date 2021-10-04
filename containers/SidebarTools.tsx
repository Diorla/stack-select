import Button from "components/Button";
import Hidden from "components/Hidden";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import SearchInput from "components/SearchInput";
import Stack from "components/Stack";
import ToolCard from "components/ToolItem";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import SidebarCreateTool from "./SidebarCreateTool";

export default function SidebarTools({
  visible,
  goBack,
}: {
  visible: boolean;
  goBack: () => void;
}) {
  const list: number[] = [];
  for (let i = 0; i < 20; i++) {
    list.push(i);
  }
  const [createToolVisible, setCreateToolVisible] = useState(false);
  return (
    <Pane
      style={{
        width: "clamp(320px, 40%, 360px)",
        display: visible ? "initial" : "none",
      }}
    >
      <Row style={{ alignItems: "center", cursor: "pointer" }} onClick={goBack}>
        <MdArrowBack style={{ fontSize: "1.5rem" }} /> Back
      </Row>
      <Stack style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <SearchInput />
      </Stack>
      <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <Button color="secondary" onClick={() => setCreateToolVisible(true)}>
          New tool
        </Button>
      </Row>
      <Scroll offset={9.8}>
        <SidebarCreateTool
          visible={createToolVisible}
          close={() => setCreateToolVisible(false)}
        />
        {list.map((item) => (
          <ToolCard key={item} checked={!!(item % 4)} />
        ))}
      </Scroll>
    </Pane>
  );
}
