import Pane from "components/Pane";
import ProjectCard from "components/ProjectCard";
import Row from "components/Row";
import Stats from "components/Stats";
import Text from "components/Text";
import { status } from "interfaces/project";
import React, { useState } from "react";
import Button from "components/Button";
import Modal from "components/Modal";
import { useUser } from "context";
import Pile from "components/Pile";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Textarea from "components/Textarea";
import createProject from "services/createProject";
import { v4 } from "uuid";
import Dropdown from "components/Dropdown";
import ViewWrapper from "components/ViewWrapper";

export default function Projects({
  openProject,
}: {
  openProject: (str: string) => void;
}) {
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
  const { projects, user } = useUser();
  const doing = projects.filter((project) => project.status === "doing");
  const done = projects.filter((project) => project.status === "done");
  const addProject = () => {
    createProject(user.uid, {
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
    <Pane style={{ flex: 1, padding: "0.2rem" }}>
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
      <Row style={{ justifyContent: "space-between" }}>
        <Text variant="h2">Projects</Text>
        <Row>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setProject({ ...project, visible: true })}
          >
            New Project
          </Button>
        </Row>
      </Row>
      <Row>
        <Stats value={doing.length} title="In progress" />
        <Stats value={done.length} title="Completed" />
        <Stats value={projects.length} title="Total" />
      </Row>
      {projects.length ? (
        <ViewWrapper offset={11}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              openProject={openProject}
              project={project}
            />
          ))}
        </ViewWrapper>
      ) : (
        <Row style={{ justifyContent: "center" }}>No project created</Row>
      )}
    </Pane>
  );
}
