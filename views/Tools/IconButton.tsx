import Button from "components/Button";
import React from "react";
import { GrGrid, GrSort } from "react-icons/gr";

export default function IconButton({
  isAll,
  onClick,
}: {
  isAll: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="primary"
      style={{ marginRight: 4 }}
      title={isAll ? "Group tools by their stack" : "Show all tools"}
    >
      {isAll ? <GrSort /> : <GrGrid />}
    </Button>
  );
}
