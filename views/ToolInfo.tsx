import Dropdown from "components/Dropdown";
import InputLabel from "components/InputLabel";
import Pane from "components/Pane";
import Rating from "components/Rating";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Pile from "components/Pile";
import Text from "components/Text";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useUser } from "context";
import Editable from "components/Editable";
import EditableTextArea from "components/EditableTextArea";
import createTool from "services/createTool";

export default function ProjectInfo({
  goBack,
  toolId,
}: {
  goBack: () => void;
  toolId: string;
}) {
  const {
    tools,
    stacks,
    user: { uid },
  } = useUser();
  const currentTool = tools.filter((tool) => tool.id === toolId)[0];
  const { name, rating, description, stackId } = currentTool;
  const currentStack = stacks.filter((stack) => stack.id === stackId)[0];
  const [editName, setEditName] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  const updateName = (val: string) => {
    if (val !== name)
      createTool(uid, {
        ...currentTool,
        name: val,
      });
    setEditName(!editName);
  };
  const updateDesc = (val: string) => {
    if (val !== name)
      createTool(uid, {
        ...currentTool,
        description: val,
      });
    setEditDesc(!editDesc);
  };
  const updateRating = (rating: number) => {
    createTool(uid, {
      ...currentTool,
      rating,
    });
  };
  const updateStack = (value: string) => {
    const stack = stacks.filter((stack) => stack.name === value)[0];
    createTool(uid, {
      ...currentTool,
      stackId: stack?.id || "",
    });
  };
  return (
    <Pane style={{ flex: 1, padding: "0.2rem", height: "calc(100vh - 8rem)" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text>
          <span onClick={goBack} style={{ cursor: "pointer" }}>
            Tool
          </span>
          /{name}
        </Text>
        <Row
          style={{ alignItems: "center", cursor: "pointer" }}
          onClick={goBack}
        >
          <MdArrowBack style={{ fontSize: "1.5rem" }} /> Back
        </Row>
      </Row>
      <Scroll offset={6}>
        <Pile style={{ width: "90%" }}>
          <Editable
            editable={editName}
            variant="h3"
            initialValue={name}
            toggleEdit={(val) => updateName(val)}
          />
          <EditableTextArea
            editable={editDesc}
            initialValue={description}
            toggleEdit={(val) => updateDesc(val)}
          />
          <Row>
            <InputLabel>Rating: </InputLabel>{" "}
            <Rating value={rating} onChange={(value) => updateRating(value)} />
          </Row>
          <Pile>
            <Row>
              <InputLabel htmlFor="stack">Stacks: </InputLabel>{" "}
              {currentStack?.name}
            </Row>
            <Dropdown
              id="stack"
              list={["Misc", ...stacks.map((stack) => stack.name)]}
              value={currentStack?.name}
              onChange={(e) => updateStack(e.target.value)}
            />
          </Pile>
        </Pile>
      </Scroll>
    </Pane>
  );
}
