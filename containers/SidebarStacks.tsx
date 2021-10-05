import Button from "components/Button";
import StackItem from "components/StackItem";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Pile from "components/Pile";
import Textarea from "components/Textarea";
import React, { useState } from "react";
import { useUser } from "context";
import createStack from "services/createStack";
import { v4 } from "uuid";

export default function SidebarStacks({
  visible,
  openTools,
}: {
  visible: boolean;
  openTools: (tool: string) => void;
}) {
  const {
    stacks,
    user: { uid },
  } = useUser();
  const [stack, setStack] = useState({
    name: "",
    description: "",
    visible: false,
  });
  const saveStack = () => {
    createStack(uid, {
      ...stack,
      id: v4(),
      modified: Date.now(),
    }).then(() => {
      setStack({
        name: "",
        description: "",
        visible: false,
      });
    });
  };
  return (
    <Pane
      style={{
        width: "clamp(320px, 40%, 360px)",
        display: visible ? "initial" : "none",
      }}
    >
      <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <SearchInput />
      </Row>
      <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
        <Button
          color="secondary"
          onClick={() => {
            setStack({
              name: "",
              description: "",
              visible: true,
            });
          }}
        >
          New Stack
        </Button>
      </Row>
      <Scroll offset={8}>
        <SidebarDropdown visible={stack.visible}>
          <Pile>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={stack.name}
              onChange={(e) =>
                setStack({
                  ...stack,
                  name: e.target.value,
                })
              }
            />
          </Pile>
          <Pile>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Textarea
              id="description"
              value={stack.description}
              onChange={(e) =>
                setStack({
                  ...stack,
                  description: e.target.value,
                })
              }
              rows={4}
            />
          </Pile>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button color="success" onClick={saveStack}>
              Save
            </Button>
            <Button
              color="error"
              onClick={() => {
                setStack({
                  name: "",
                  description: "",
                  visible: false,
                });
              }}
            >
              Cancel
            </Button>
          </Row>
        </SidebarDropdown>
        {stacks.map((item) => (
          <StackItem
            key={item.id}
            openTools={() => openTools(item.id)}
            stack={item}
          />
        ))}
      </Scroll>
    </Pane>
  );
}
