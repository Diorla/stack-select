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

export default function SidebarStacks({
  visible,
  openTools,
}: {
  visible: boolean;
  openTools: (tool: string) => void;
}) {
  const list: number[] = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }
  const [stack, setStack] = useState({
    name: "",
    description: "",
    visible: false,
  });
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
            />
          </Pile>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button
              color="success"
              onClick={() => {
                setStack({
                  name: "",
                  description: "",
                  visible: false,
                });
              }}
            >
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
        {list.map((item) => (
          <StackItem key={item} openTools={() => openTools("tool name")} />
        ))}
      </Scroll>
    </Pane>
  );
}
