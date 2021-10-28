import { useUser } from "context";
import stack from "interfaces/stack";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import deleteStack from "services/deleteStack";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import Modal from "./Modal";
import NavLink from "./NavLink";
import Pile from "./Pile";
import Row from "./Row";
import Text from "./Text";

export default function StackCard({
  isList,
  stack,
}: {
  isList?: boolean;
  stack: stack;
}) {
  const { tools } = useUser();
  const { name, description, id } = stack;
  const stackTools = tools.filter((tool) => tool.stackId === id);
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    user: { uid },
  } = useUser();

  const deleteThis = () => {
    deleteStack(uid, stack.id).then(() => setDeleteModal(false));
  };

  return (
    <Card
      elevation={1}
      color="primary"
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
            Delete <u>{stack.name}</u>
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
        <Link href={`/stack/${id}`} passHref>
          <NavLink>
            <Text variant="h3" style={{ cursor: "pointer", color: "black" }}>
              {name}
            </Text>
          </NavLink>
        </Link>
      </Row>
      <Text style={{ padding: "0.4rem", wordBreak: "break-word" }}>
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </Text>
      <Divider size={1} color="primary" />
      <Row
        style={{
          justifyContent: "space-between",
          padding: "0.4rem",
        }}
      >
        <Text variant="caption">{stackTools.length} tools</Text>
        <MdDelete
          style={{ cursor: "pointer", height: 24, width: 24 }}
          onClick={() => setDeleteModal(true)}
        />
      </Row>
    </Card>
  );
}
