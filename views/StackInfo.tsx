import Button from "components/Button";
import Divider from "components/Divider";
import Dropdown from "components/Dropdown";
import InputLabel from "components/InputLabel";
import Note from "components/Note";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Pile from "components/Pile";
import Text from "components/Text";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useUser } from "context";
import Editable from "components/Editable";
import createStack from "services/createStack";
import EditableTextArea from "components/EditableTextArea";

export default function StackInfo({
  goBack,
  stackId,
}: {
  goBack: () => void;
  stackId: string;
}) {
  const {
    stacks,
    user: { uid },
  } = useUser();
  const currentStack = stacks.filter((stack) => stack.id === stackId)[0];
  const { name, description } = currentStack;
  const [editName, setEditName] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  const updateName = (val: string) => {
    if (val !== name)
      createStack(uid, {
        ...currentStack,
        name: val,
      });
    setEditName(!editName);
  };
  const updateDesc = (val: string) => {
    if (val !== name)
      createStack(uid, {
        ...currentStack,
        description: val,
      });
    setEditDesc(!editDesc);
  };
  return (
    <Pane style={{ flex: 1, padding: "0.2rem", height: "calc(100vh - 8rem)" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text>
          <span onClick={goBack} style={{ cursor: "pointer" }}>
            Stack
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
            variant="h3"
            editable={editName}
            toggleEdit={(val) => updateName(val)}
            initialValue={name}
          />
          <EditableTextArea
            editable={editDesc}
            toggleEdit={(val) => updateDesc(val)}
            initialValue={description}
          />
        </Pile>
      </Scroll>
    </Pane>
  );
}
