import Pane from "components/Pane";
import StackCard from "components/StackCard";
import Row from "components/Row";
import Text from "components/Text";
import React, { useState } from "react";
import Button from "components/Button";
import { useUser } from "context";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Modal from "components/Modal";
import Pile from "components/Pile";
import Textarea from "components/Textarea";
import createStack from "services/createStack";
import { v4 } from "uuid";
import ViewWrapper from "components/ViewWrapper";

export default function Stacks({
  openStack,
}: {
  openStack: (str: string) => void;
}) {
  const {
    stacks,
    user: { uid },
  } = useUser();
  const [stack, setStack] = useState({
    visible: false,
    name: "",
    description: "",
  });

  const addStack = () => {
    createStack(uid, {
      ...stack,
      id: v4(),
      modified: Date.now(),
    }).then(() =>
      setStack({
        visible: false,
        name: "",
        description: "",
      })
    );
  };
  return (
    <Pane style={{ flex: 1, padding: "0.2rem" }}>
      <Modal
        visible={stack.visible}
        onClose={() => setStack({ ...stack, visible: false })}
      >
        <Pile style={{ justifyContent: "center" }}>
          <Text variant="h3" style={{ textAlign: "center" }}>
            New Stack
          </Text>
          <InputLabel htmlFor="Name">Name</InputLabel>
          <Input
            id="Name"
            value={stack.name}
            onChange={(e) => setStack({ ...stack, name: e.target.value })}
          />
          <InputLabel htmlFor="Description">Description</InputLabel>
          <Textarea
            id="Description"
            value={stack.description}
            onChange={(e) =>
              setStack({ ...stack, description: e.target.value })
            }
            rows={4}
          />
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button onClick={addStack} color="success">
              Save
            </Button>
            <Button
              onClick={() => setStack({ ...stack, visible: false })}
              color="error"
            >
              Cancel
            </Button>
          </Row>
        </Pile>
      </Modal>
      <Row style={{ justifyContent: "space-between" }}>
        <Text variant="h2">Stacks</Text>
        <Row>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setStack({ ...stack, visible: true })}
          >
            New Stack
          </Button>
        </Row>
      </Row>
      <ViewWrapper offset={11}>
        {stacks.map((stack) => (
          <StackCard
            key={stack.id}
            openStack={() => openStack(stack.id)}
            stack={stack}
          />
        ))}
      </ViewWrapper>
    </Pane>
  );
}
