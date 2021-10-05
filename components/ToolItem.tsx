import React, { useState } from "react";
import Radio from "./Radio";
import Rating from "./Rating";
import Row from "./Row";
import Pile from "./Pile";
import Text from "./Text";
import tool from "interfaces/tool";
import { useUser } from "context";
import { MdDelete } from "react-icons/md";
import deleteTool from "services/deleteTool";
import Button from "./Button";
import Modal from "./Modal";
import createTool from "services/createTool";

export default function ToolItem({
  checked,
  tool,
  onCheck,
  hideCheckbox,
}: {
  checked: boolean;
  tool: tool;
  onCheck: (id: string) => void;
  hideCheckbox: boolean;
}) {
  const {
    user: { uid },
  } = useUser();
  const [deleteModal, setDeleteModal] = useState(false);

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
    <Pile style={{ width: "100%", borderBottom: "1px solid silver" }}>
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
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>{tool.name}</Text>
        {hideCheckbox ? null : (
          <Radio checked={checked} onClick={() => onCheck(tool.id)} />
        )}
      </Row>
      <Row style={{ justifyContent: "space-between", alignItems: "baseline" }}>
        <Rating value={tool.rating} onChange={(value) => updateRating(value)} />
        <MdDelete
          style={{ cursor: "pointer", height: 24, width: 24 }}
          onClick={() => setDeleteModal(true)}
        />
      </Row>
    </Pile>
  );
}
