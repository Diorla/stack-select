import Button from "components/Button";
import Hidden from "components/Hidden";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import SearchInput from "components/SearchInput";
import Pile from "components/Pile";
import ToolCard from "components/ToolItem";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import SidebarCreateTool from "./SidebarCreateTool";
import { useUser } from "context";
import toggleItemInList from "scripts/toggleItemInList";
import createProject from "services/createProject";

export default function SidebarTools({
  visible,
  goBack,
  stackId,
  projectID,
}: {
  visible: boolean;
  goBack: () => void;
  stackId: string;
  projectID: string;
}) {
  const {
    tools,
    projects,
    user: { uid },
  } = useUser();
  const currentTools = tools.filter((tool) => tool.stackId === stackId);
  const currentProject = projects.filter(
    (project) => project.id === projectID
  )[0];
  const [createToolVisible, setCreateToolVisible] = useState(false);

  const toggleProjectTools = (id: string) => {
    const tools = toggleItemInList(currentProject.toolsId, id);
    createProject(uid, {
      ...currentProject,
      toolsId: tools,
    });
  };
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
      <Pile style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <SearchInput />
      </Pile>
      <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <Button color="secondary" onClick={() => setCreateToolVisible(true)}>
          New tool
        </Button>
      </Row>
      <Scroll offset={9.8}>
        <SidebarCreateTool
          visible={createToolVisible}
          close={() => setCreateToolVisible(false)}
          stackId={stackId}
        />
        {currentTools.map((item) => (
          <ToolCard
            key={item.id}
            onCheck={(id) => toggleProjectTools(id)}
            checked={currentProject.toolsId.includes(item.id)}
            tool={item}
          />
        ))}
      </Scroll>
    </Pane>
  );
}
