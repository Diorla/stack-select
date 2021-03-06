import Chip from "components/Chip";
import InputLabel from "components/InputLabel";
import ItemPageHeader from "components/ItemPageHeader";
import Layout from "components/Layout";
import Modal from "components/Modal";
import NavLink from "components/NavLink";
import NoSearchAppBar from "components/NoSearchAppBar";
import Pile from "components/Pile";
import Rating from "components/Rating";
import Row from "components/Row";
import Section from "components/Section";
import Text from "components/Text";
import { useUser } from "context";
import useTool from "hooks/useTool";
import Link from "next/link";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import CancelIcon from "views/Project/CancelIcon";
import removeTool from "views/Project/removeTool";
import ToolForm from "views/Tools/ToolForm";

const initialTool = {
  id: "",
  name: "",
  rating: 0,
  description: "",
  modified: 0,
  stackId: "",
};

export default function Tool({ id }: { id: string }) {
  const {
    tools,
    stacks,
    loadingTool,
    projects,
    user: { uid },
  } = useUser();
  const [visible, setVisible] = useState(false);
  const currentTool = tools.filter((tool) => tool.id === id)[0] || initialTool;

  const currentStack = stacks.filter(
    (stack) => stack.id === currentTool.stackId
  )[0];

  const projectList = projects.filter((project) =>
    project.toolsId.includes(id)
  );

  if (loadingTool) return <div>loading</div>;
  return (
    <Layout activePath="tool" appBar={<NoSearchAppBar />}>
      {currentTool.id ? (
        <Section
          header={<ItemPageHeader href="/tools" name={currentTool.name} />}
          headerHeight={40}
        >
          <Modal visible={visible} onClose={() => setVisible(false)}>
            <Text variant="h3" style={{ textAlign: "center" }}>
              Update Tool
            </Text>
            <ToolForm
              initialValues={currentTool}
              onClose={() => setVisible(false)}
            />
          </Modal>
          <Pile>
            <Text
              variant="h3"
              style={{ display: "flex", alignItems: "center" }}
            >
              {currentTool.name}{" "}
              <MdEdit
                onClick={() => setVisible(true)}
                style={{ cursor: "pointer" }}
              />
            </Text>
            <Rating value={currentTool.rating} disabled onChange={() => null} />
            <Row>
              <InputLabel>Stack</InputLabel>:{"  "}
              <Link href={`/stack/${currentStack?.id}`} passHref>
                <NavLink>
                  <Text>{currentStack?.name}</Text>
                </NavLink>
              </Link>
            </Row>
            <Text
              style={{
                border: "1px solid silver",
                padding: 2,
              }}
            >
              {currentTool.description || "No description"}
            </Text>
            <Row>
              {projectList.length ? (
                projectList.map((item) => (
                  <Chip
                    style={{ margin: 1 }}
                    key={item.id}
                    value={item.name}
                    href={`/project/${item.id}`}
                    icon={
                      <CancelIcon
                        onClick={() => removeTool(currentTool.id, uid, item)}
                      />
                    }
                    color="secondary"
                  />
                ))
              ) : (
                <Text>No project added</Text>
              )}
            </Row>
          </Pile>
        </Section>
      ) : (
        <Text>Tool not found</Text>
      )}
    </Layout>
  );
}
