import Button from "components/Button";
import Input from "components/Input";
import InputLabel from "components/InputLabel";
import NavLink from "components/NavLink";
import Pile from "components/Pile";
import Rating from "components/Rating";
import Row from "components/Row";
import SearchInput from "components/SearchInput";
import SidebarDropdown from "components/SidebarDropdown";
import Text from "components/Text";
import Textarea from "components/Textarea";
import { useUser } from "context";
import stack from "interfaces/stack";
import Link from "next/link";
import React, { useState } from "react";
import createTool from "services/createTool";
import { v4 } from "uuid";

// TODO: Use backend to filter tools
/**
 * This will mean having stuff like user/filteredTool = { stackId: id, tools: [id, id]}
 * And when we clear, we will have an empty arr, ie. user/filteredTool = []
 * And when rendering list, I will check for filteredTools.length to choose which to render
 * The stackId is meant to also confirm that it is the same stack of course
 * Once, I do this, I should enable the update of rating from sidebar tools as well
 */
export default function ToolHeader({
  setSearch,
  currentStack,
  goBack,
  isProject,
  filterTwo,
  filterInfo,
}: {
  setSearch: (arg: string) => void;
  currentStack: stack;
  goBack: () => void;
  isProject: boolean;
  filterTwo: () => void;
  filterInfo: {
    disabled: boolean;
    title: string;
  };
}) {
  const {
    user: { uid },
  } = useUser();
  const { id: stackId, name, description } = currentStack;
  const [tool, setTool] = useState({
    visible: false,
    name: "",
    description: "",
    rating: 0,
    stackId,
  });
  const saveTool = () => {
    createTool(uid, {
      ...tool,
      id: v4(),
      modified: Date.now(),
    }).then(() => {
      setTool({
        visible: false,
        name: "",
        description: "",
        rating: 0,
        stackId,
      });
    });
  };
  return (
    <Pile style={{ width: "100%", alignItems: "center", position: "relative" }}>
      <Pile style={{ alignItems: "center", width: "100%" }}>
        <Text variant="h3">{name}</Text>
        <Text>{description}</Text>
        <Row style={{ width: "100%", justifyContent: "space-evenly" }}>
          {isProject ? (
            <Link href={`/stack/${stackId}`} passHref>
              <NavLink>
                <Button color="primary" variant="text">
                  Open stack
                </Button>
              </NavLink>
            </Link>
          ) : null}
          <Button onClick={goBack} color="secondary" variant="text">
            Go back
          </Button>
        </Row>
      </Pile>
      <SearchInput
        wrapperStyle={{ width: "clamp(180px, 80%, 320px)", marginBottom: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Row style={{ width: "100%", justifyContent: "space-evenly" }}>
        <Button
          color="primary"
          onClick={() =>
            setTool({
              ...tool,
              visible: true,
            })
          }
        >
          New Tool
        </Button>
        <Button
          color="secondary"
          onClick={filterTwo}
          disabled={filterInfo.disabled}
        >
          {filterInfo.title}
        </Button>
      </Row>
      <SidebarDropdown visible={tool.visible}>
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
            maxLength={120}
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
            <Button
              color="error"
              onClick={() =>
                setTool({
                  ...tool,
                  visible: false,
                })
              }
            >
              Cancel
            </Button>
          </Row>
        </Pile>
      </SidebarDropdown>
    </Pile>
  );
}
