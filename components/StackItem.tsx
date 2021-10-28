import Row from "./Row";
import Pile from "./Pile";
import Text from "./Text";
import stack from "interfaces/stack";
import { MdDelete } from "react-icons/md";
import { useUser } from "context";
import React, { useState } from "react";
import deleteStack from "services/deleteStack";
import Modal from "./Modal";
import Button from "./Button";
import pluralByS from "scripts/pluralByS";

export default function StackItem({
  openTools,
  stack,
}: {
  openTools: () => void;
  stack: stack;
}) {
  const {
    user: { uid },
    tools,
  } = useUser();
  const [deleteModal, setDeleteModal] = useState(false);

  const deleteThis = () => {
    deleteStack(uid, stack.id).then(() => setDeleteModal(false));
  };

  const StackTools = tools.filter((tool) => tool.stackId === stack.id);
  return (
    <Pile
      style={{
        borderBottom: "1px solid silver",
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
      <Row
        style={{ marginBottom: "0.8rem", cursor: "pointer" }}
        onClick={() => openTools()}
      >
        {stack.name}
      </Row>
      <Row
        style={{
          justifyContent: "space-between",
        }}
      >
        <Text>
          {StackTools.length} {pluralByS("tool", StackTools.length)}
        </Text>
        <MdDelete
          style={{ cursor: "pointer", height: 24, width: 24 }}
          onClick={() => setDeleteModal(true)}
        />
      </Row>
    </Pile>
  );
}
