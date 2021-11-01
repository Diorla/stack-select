import { useUser } from "context";
import color from "interfaces/color";
import project from "interfaces/project";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import deleteProject from "services/deleteProject";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import MainCard from "./MainCard";
import Modal from "./Modal";
import NavLink from "./NavLink";
import Pile from "./Pile";
import Row from "./Row";
import Text from "./Text";

const sx = {
  doing: "Ongoing",
  done: "Completed",
  reviewing: "In review",
  todo: "Not started",
};
export default function ProjectCard({ project }: { project: project }) {
  const {
    user: { uid },
  } = useUser();
  const { name, description, toolsId, status } = project;
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
    <MainCard
      header={
        <>
          <Row style={{ justifyContent: "space-between", padding: "0.4rem" }}>
            <Link href={`project/${project.id}`}>
              <NavLink>
                <Text variant="h3" style={{ cursor: "pointer" }}>
                  {name}
                </Text>
              </NavLink>
            </Link>
          </Row>
          <Text
            variant="caption"
            style={{ fontStyle: "italic", paddingLeft: "0.2rem" }}
          >
            {sx[status]}
          </Text>
        </>
      }
      footer={
        <>
          <Row
            style={{
              justifyContent: "space-between",
              padding: "0.4rem",
            }}
          >
            <Text variant="caption">{toolsId.length} tools</Text>
            <MdDelete
              style={{ cursor: "pointer", height: 24, width: 24 }}
              onClick={() => setDeleteModal(true)}
            />
          </Row>
        </>
      }
      color={color}
      visible={deleteModal}
      name={project.name}
      onClose={function (): void {
        setDeleteModal(false);
      }}
      onDelete={function (): void {
        deleteThis();
      }}
    >
      <Pile>
        <Text style={{ padding: "0.4rem", wordBreak: "break-word" }}>
          {description}
        </Text>
      </Pile>
    </MainCard>
  );
}
