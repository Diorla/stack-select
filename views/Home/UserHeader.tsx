import React, { useState } from "react";
import Row from "components/Row";
import { useUser } from "context";
import Stats from "components/Stats";
import { status } from "interfaces/project";
import Hidden from "components/Hidden";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Modal from "components/Modal";
import Pile from "components/Pile";
import Textarea from "components/Textarea";
import Text from "components/Text";
import createProject from "services/createProject";
import { v4 } from "uuid";

export default function UserHeader({
  onClick,
  status,
}: {
  onClick: (status: status | "") => void;
  status: status | "";
}) {
  const {
    projects,
    user: { uid },
  } = useUser();
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
  const addProject = () => {
    createProject(uid, {
      ...project,
      id: v4(),
      modified: Date.now(),
      toolsId: [],
      notes: [],
    }).then(() =>
      setProject({
        ...project,
        visible: false,
        name: "",
        description: "",
      })
    );
  };
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
        <Pile style={{ justifyContent: "center" }}>
          <Text variant="h3" style={{ textAlign: "center" }}>
            New Project
          </Text>
          <InputLabel htmlFor="Name">Name</InputLabel>
          <Input
            id="Name"
            value={project.name}
            onChange={(e) => setProject({ ...project, name: e.target.value })}
          />
          <InputLabel htmlFor="Description">Description</InputLabel>
          <Textarea
            id="Description"
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            rows={4}
          />
          <InputLabel htmlFor="Status">Status</InputLabel>
          <Dropdown
            id="Status"
            style={{
              textTransform: "capitalize",
            }}
            list={["todo", "doing", "done", "reviewing"]}
            value={project.status}
            onChange={(e) =>
              setProject({
                ...project,
                status: e.target.value as status,
              })
            }
          />
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button onClick={addProject} color="success">
              Save
            </Button>
            <Button
              onClick={() => setProject({ ...project, visible: false })}
              color="error"
            >
              Cancel
            </Button>
          </Row>
        </Pile>
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
