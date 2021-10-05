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
import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useUser } from "context";

export default function ProjectInfo({
  goBack,
  id,
}: {
  goBack: () => void;
  id: string;
}) {
  const { projects, tools } = useUser();
  const currentProject = projects.filter((item) => item.id === id)[0];
  const { name, description, toolsId, notes } = currentProject;
  const projectTools = tools.filter((tool) => toolsId.includes(tool.id));
  return (
    <Pane
      style={{
        flex: 1,
        padding: "0.2rem",
        height: "calc(100vh - 8rem)",
        width: "100%",
      }}
    >
      <Row style={{ justifyContent: "space-between" }}>
        <Text>
          <span onClick={goBack} style={{ cursor: "pointer" }}>
            Projects
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
        <Pile style={{ width: "100%" }}>
          <Text variant="h3">{name}</Text>
          <Text>{description}</Text>
          <Divider size={0} style={{ marginBottom: "1rem" }} />
          <InputLabel style={{ fontWeight: "bold" }}>Status</InputLabel>
          <Dropdown list={["Completed", "Ongoing"]} value="Complete" />
          <Text variant="h4">Tools</Text>
          <Row style={{ flexWrap: "wrap" }}>
            {projectTools.length ? (
              projectTools.map((item) => (
                <Text key={item.id} style={{ marginRight: "0.4rem" }}>
                  {item.name}
                </Text>
              ))
            ) : (
              <Text>No tools added yet</Text>
            )}
          </Row>
          <Pile style={{ alignItems: "center", marginTop: "0.4rem" }}>
            <Button style={{ marginBottom: "0.2rem" }}>Add Note</Button>
            <Row
              style={{
                flexWrap: "wrap",
                flex: 1,
                justifyContent: "space-evenly",
              }}
            >
              {notes.map((item, idx) => (
                <Note key={idx} value={item} />
              ))}
            </Row>
          </Pile>
        </Pile>
      </Scroll>
    </Pane>
  );
}
