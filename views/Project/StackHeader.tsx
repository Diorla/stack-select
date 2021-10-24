import Button from "components/Button";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import Pile from "components/Pile";
import Row from "components/Row";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Text from "components/Text";
import Textarea from "components/Textarea";
import { useUser } from "context";
import React, { useState } from "react";
import createStack from "services/createStack";
import { v4 } from "uuid";

// TODO: Enable search to include tools
/**
 * For example, if you search "React" which is a tool, it should return stacks like "Frontend", "React State Management" etc
 * Check StackItem for StackTools, I could generate it here
 */
export default function StackHeader({
  setSearch,
}: {
  setSearch: (arg: string) => void;
}) {
  const {
    user: { uid },
  } = useUser();
  const [stack, setStack] = useState({
    visible: false,
    name: "",
    description: "",
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
    <Pile style={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Text variant="h3">Stacks</Text>
      <SearchInput
        wrapperStyle={{ width: "clamp(180px, 80%, 320px)", marginBottom: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        color="primary"
        onClick={() =>
          setStack({
            ...stack,
            visible: true,
          })
        }
      >
        New Stack
      </Button>
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
            maxLength={120}
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
    </Pile>
  );
}
