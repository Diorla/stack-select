import Button from "components/Button";
import Category from "components/Category";
import Hidden from "components/Hidden";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Pane from "components/Pane";
import Row from "components/Row";
import Scroll from "components/Scroll";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Stack from "components/Stack";
import Textarea from "components/Textarea";
import React, { useState } from "react";

export default function SidebarCategories({
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
    <>
      <Hidden smDown>
        <Pane
          style={{
            width: "clamp(320px, 40%, 360px)",
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
              <Stack>
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
              </Stack>
              <Stack>
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
              </Stack>
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
              <Category key={item} openTools={() => openTools("tool name")} />
            ))}
          </Scroll>
        </Pane>
      </Hidden>
      <Hidden smUp>
        {visible ? (
          <Pane
            style={{
              width: "calc(100% - 3rem)",
              position: "absolute",
            }}
          >
            <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
              <SearchInput />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
              <Button color="secondary">New Stack</Button>
            </Row>
            <Scroll offset={8}>
              {list.map((item) => (
                <Category key={item} openTools={() => openTools("tool name")} />
              ))}
            </Scroll>
          </Pane>
        ) : null}
      </Hidden>
    </>
  );
}
