import Button from "components/Button";
import Dropdown from "components/Dropdown";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Rating from "components/Rating";
import Row from "components/Row";
import SidebarDropdown from "components/SidebarDropdown";
import Stack from "components/Stack";
import Textarea from "components/Textarea";
import React, { useState } from "react";

export default function SidebarCreateTool({
  visible,
  close,
}: {
  visible: boolean;
  close: () => void;
}) {
  const [rating, setRating] = useState(0);
  return (
    <SidebarDropdown visible={visible}>
      <Stack>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input id="name" />
        <InputLabel htmlFor="description">Description</InputLabel>
        <Textarea id="description" />
        <InputLabel htmlFor="rating">Rating</InputLabel>
        <Rating value={rating} onChange={(rating) => setRating(rating)} />
        <InputLabel htmlFor="categories">Categories</InputLabel>
        <Dropdown
          list={["Hello", "World", "Darkness", "My", "Old"]}
          value="Darkness"
          onChange={(e) => console.log(e.target.value)}
        />
        <Row style={{ justifyContent: "space-evenly" }}>
          <Button color="success" onClick={close}>
            Save
          </Button>
          <Button color="error" onClick={close}>
            Cancel
          </Button>
        </Row>
      </Stack>
    </SidebarDropdown>
  );
}
