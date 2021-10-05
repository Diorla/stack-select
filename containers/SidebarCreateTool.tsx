import Button from "components/Button";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Rating from "components/Rating";
import Row from "components/Row";
import SidebarDropdown from "components/SidebarDropdown";
import Pile from "components/Pile";
import Textarea from "components/Textarea";
import React, { useState } from "react";
import createTool from "services/createTool";
import { useUser } from "context";
import { v4 } from "uuid";

export default function SidebarCreateTool({
  visible,
  close,
  stackId,
}: {
  visible: boolean;
  close: () => void;
  stackId: string;
}) {
  const {
    user: { uid },
  } = useUser();
  const [tool, setTool] = useState({
    rating: 0,
    name: "",
    description: "",
  });

  const saveTool = () => {
    createTool(uid, {
      ...tool,
      id: v4(),
      modified: Date.now(),
      stackId,
    })
      .then(() =>
        setTool({
          rating: 0,
          name: "",
          description: "",
        })
      )
      .then(close);
  };
  return (
    <SidebarDropdown visible={visible}>
      <Pile>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          value={tool.name}
          onChange={(e) =>
            setTool({
              ...tool,
              name: e.target.value,
            })
          }
        />
        <InputLabel htmlFor="description">Description</InputLabel>
        <Textarea
          id="description"
          value={tool.description}
          onChange={(e) =>
            setTool({
              ...tool,
              description: e.target.value,
            })
          }
        />
        <InputLabel htmlFor="rating">Rating</InputLabel>
        <Rating
          value={tool.rating}
          onChange={(rating) =>
            setTool({
              ...tool,
              rating,
            })
          }
        />
        <Row style={{ justifyContent: "space-evenly" }}>
          <Button color="success" onClick={() => saveTool()}>
            Save
          </Button>
          <Button color="error" onClick={close}>
            Cancel
          </Button>
        </Row>
      </Pile>
    </SidebarDropdown>
  );
}
