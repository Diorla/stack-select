import { useUser } from "context";
import tool from "interfaces/tool";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import createTool from "services/createTool";
import deleteTool from "services/deleteTool";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import Modal from "./Modal";
import NavLink from "./NavLink";
import Pile from "./Pile";
import Rating from "./Rating";
import Row from "./Row";
import Text from "./Text";

export default function ToolCard({ tool }: { tool: tool }) {
  const [deleteModal, setDeleteModal] = useState(false);
  const { name, rating, description } = tool;
  const {
    user: { uid },
  } = useUser();
  const deleteThis = () => {
    deleteTool(uid, tool.id).then(() => setDeleteModal(false));
  };
  const updateRating = (rating: number) => {
    createTool(uid, {
      ...tool,
      rating,
    });
  };
  return (
    <Card
      elevation={1}
      color="primary"
      style={{
        width: "16rem",
        minHeight: "8rem",
        margin: "0.2rem",
        borderRadius: "0.4rem",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <Modal visible={deleteModal} onClose={() => setDeleteModal(false)}>
        <Pile>
          <Text variant="h4" style={{ textAlign: "center" }}>
            Delete <u>{tool.name}</u>
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
        style={{
          justifyContent: "space-between",
          padding: "0.4rem",
        }}
      >
        <Link href={`/tool/${tool.id}`} passHref>
          <NavLink>
            <Text variant="h3" style={{ cursor: "pointer", color: "black" }}>
              {name}
            </Text>
          </NavLink>
        </Link>
      </Row>
      <Text style={{ padding: "0.4rem", wordBreak: "break-word" }}>
        {description}
      </Text>
      <Divider size={1} color="primary" />
      <Row
        style={{
          justifyContent: "space-between",
          height: "2.4rem",
        }}
      >
        <Rating value={rating} onChange={(value) => updateRating(value)} />
        <MdDelete
          style={{ cursor: "pointer", height: 24, width: 24 }}
          onClick={() => setDeleteModal(true)}
        />
      </Row>
    </Card>
  );
}
