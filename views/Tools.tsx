import Pane from "components/Pane";
import ToolCard from "components/ToolCard";
import Row from "components/Row";
import Text from "components/Text";
import React from "react";
import Button from "components/Button";
import { useUser } from "context";
import ViewWrapper from "components/ViewWrapper";

export default function Tools({
  openTool,
}: {
  openTool: (str: string) => void;
}) {
  const { tools } = useUser();

  return (
    <Pane style={{ flex: 1, padding: "0.2rem" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text variant="h2">Tools</Text>
        <Row>
          <Button variant="outlined" color="primary">
            New Tool
          </Button>
        </Row>
      </Row>
      <ViewWrapper offset={11}>
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            openTool={() => openTool(tool.id)}
            tool={tool}
          />
        ))}
      </ViewWrapper>
    </Pane>
  );
}
