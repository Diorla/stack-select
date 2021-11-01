import React, { useState } from "react";
import Row from "components/Row";
import Text from "components/Text";
import { useUser } from "context";
import Stats from "components/Stats";
import { status } from "interfaces/project";
import Hidden from "components/Hidden";
import Button from "components/Button";
import Modal from "components/Modal";
import ProjectForm from "./ProjectForm";

export default function UserHeader({
  onClick,
  status,
}: {
  onClick: (status: status | "") => void;
  status: status | "";
}) {
  const { projects } = useUser();
  const doing = projects.filter((item) => item.status === "doing");
  const done = projects.filter((item) => item.status === "done");
  const todo = projects.filter((item) => item.status === "todo");
  const reviewing = projects.filter((item) => item.status === "reviewing");
  const [project, setProject] = useState<{
    visible: boolean;
    name: string;
    description: string;
    status: status;
  }>({
    visible: false,
    name: "",
    description: "",
    status: "todo",
  });
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        paddingRight: 4,
      }}
    >
      <Modal
        visible={project.visible}
        onClose={() => setProject({ ...project, visible: false })}
      >
        <Text variant="h3" style={{ textAlign: "center" }}>
          New Project
        </Text>
        <ProjectForm
          initialValues={{
            name: "",
            notes: [],
            id: "",
            toolsId: [],
            description: "",
            status: "todo",
            modified: 0,
          }}
          onClose={() => setProject({ ...project, visible: false })}
        />
      </Modal>
      <Row>
        <Hidden smDown>
          <Stats
            active={status === "todo"}
            value={todo.length}
            title="Not started"
            onClick={() => onClick("todo")}
          />
        </Hidden>
        <Stats
          active={status === "doing"}
          value={doing.length}
          title="In progress"
          onClick={() => onClick("doing")}
        />
        <Hidden mdDown>
          <Stats
            active={status === "reviewing"}
            value={reviewing.length}
            title="Under review"
            onClick={() => onClick("reviewing")}
          />
        </Hidden>
        <Hidden smDown>
          <Stats
            active={status === "done"}
            value={done.length}
            title="Completed"
            onClick={() => onClick("done")}
          />
        </Hidden>
        <Stats
          value={projects.length}
          title="Total"
          onClick={() => onClick("")}
        />
      </Row>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setProject({ ...project, visible: true })}
      >
        New project
      </Button>
    </Row>
  );
}
