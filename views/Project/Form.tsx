import Button from "components/Button";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Modal from "components/Modal";
import Pile from "components/Pile";
import Row from "components/Row";
import Textarea from "components/Textarea";
import Text from "components/Text";
import React, { useState } from "react";
import project from "interfaces/project";
import updateInfo from "./updateInfo";
import { useUser } from "context";

export default function Form({
  onClose,
  currentProject,
}: {
  onClose: () => void;
  currentProject: project;
}) {
  const [project, setProject] = useState({ ...currentProject });
  const {
    user: { uid },
  } = useUser();
  return (
    <Modal visible={true} onClose={() => null}>
      <Pile style={{ justifyContent: "center" }}>
        <Text variant="h3" style={{ textAlign: "center" }}>
          Update Project
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
          onChange={(e) => setProject({ ...project, name: e.target.value })}
          rows={4}
        />
        <Row style={{ justifyContent: "space-evenly" }}>
          <Button
            onClick={() =>
              updateInfo(
                uid,
                currentProject,
                project.name,
                project.description,
                onClose
              )
            }
            color="success"
          >
            Save
          </Button>
          <Button onClick={onClose} color="error">
            Cancel
          </Button>
        </Row>
      </Pile>
    </Modal>
  );
}
