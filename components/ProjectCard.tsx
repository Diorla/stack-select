import { useUser } from "context";
import color from "interfaces/color";
import project, { status } from "interfaces/project";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import deleteProject from "services/deleteProject";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import Modal from "./Modal";
import Pile from "./Pile";
import Row from "./Row";
import Text from "./Text";

const sx = {
  doing: "Ongoing",
  done: "Completed",
  reviewing: "In review",
  todo: "Not started",
};
export default function ProjectCard({
  openProject,
  project,
}: {
  openProject: () => void;
  project: project;
}) {
  const {
    user: { projectView, uid },
  } = useUser();
  const isList = projectView === "list";
  const { name, description, tools, status } = project;
  let color: color = "primary";
  if (status === "doing") color = "warning";
  if (status === "done") color = "success";
  if (status === "reviewing") color = "info";
  if (status === "todo") color = "error";
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteThis = () => {
    deleteProject(uid, project.id).then(() => setDeleteModal(false));
  };
  return (
    <Card
      elevation={1}
      color={color}
      style={{
        width: isList ? "90%" : "16rem",
        minHeight: "8rem",
        margin: "0.2rem",
        borderRadius: "0.4rem",
      }}
    >
      <Modal visible={deleteModal} onClose={() => setDeleteModal(false)}>
        <Pile>
          <Text variant="h4" style={{ textAlign: "center" }}>
            Delete <u>{project.name}</u>
          </Text>
          <Text>Are you sure?</Text>
          <Text>This action cannot be undone</Text>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button onClick={deleteThis} color="error">
              Delete
            </Button>
            <Button onClick={() => setDeleteModal(false)} color="info">
              Cancel
            </Button>
          </Row>
        </Pile>
      </Modal>
      <Row style={{ justifyContent: "space-between", padding: "0.4rem" }}>
        <span />
        <Text
          variant="h3"
          style={{ cursor: "pointer" }}
          onClick={() => openProject()}
        >
          {name}
        </Text>
        <MdCancel
          style={{ cursor: "pointer", fontSize: "3.6rem" }}
          onClick={() => setDeleteModal(true)}
        />
      </Row>
      <Text style={{ padding: "0.4rem" }}>
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </Text>
      <Divider size={1} color={color} />
      <Row
        style={{
          justifyContent: "space-between",
          padding: "0.4rem",
        }}
      >
        <Text variant="caption" style={{ fontStyle: "italic" }}>
          {sx[status]}
        </Text>
        <Text variant="caption">{tools.length} tools</Text>
      </Row>
    </Card>
  );
}
