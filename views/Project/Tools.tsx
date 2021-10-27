import Chip from "components/Chip";
import Row from "components/Row";
import Text from "components/Text";
import { useUser } from "context";
import project from "interfaces/project";
import React from "react";
import CancelIcon from "./CancelIcon";
import removeTool from "./removeTool";

export default function Tools({ currentProject }: { currentProject: project }) {
  const {
    user: { uid },
    tools,
  } = useUser();
  const projectTools = tools.filter((tool) =>
    currentProject.toolsId.includes(tool.id)
  );
  return (
    <>
      <Text variant="h4">Tools</Text>
      <Row style={{ flexWrap: "wrap" }}>
        {projectTools.length ? (
          projectTools.map((item) => (
            <Chip
              style={{ margin: 1 }}
              key={item.id}
              value={item.name}
              href={`/tool/${item.id}`}
              icon={
                <CancelIcon
                  onClick={() => removeTool(item.id, uid, currentProject)}
                />
              }
              color="secondary"
            />
          ))
        ) : (
          <Text>No tools added yet</Text>
        )}
      </Row>
    </>
  );
}
