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
import { status } from "interfaces/project";
import Chip from "components/Chip";
import Card from "components/Card";
import Textarea from "components/Textarea";
import CancelIcon from "./CancelIcon";
import updateStatus from "./updateStatus";
import removeTool from "./removeTool";
import deleteNote from "./deleteNote";
import addNote from "./addNote";
import Editable from "components/Editable";
import updateName from "./updateName";
import updateDesc from "./updateDesc";
import EditableTextArea from "components/EditableTextArea";

export default function ProjectInfo({
  goBack,
  id,
}: {
  goBack: () => void;
  id: string;
}) {
  const {
    projects,
    tools,
    user: { uid },
  } = useUser();
  const currentProject = projects.filter((item) => item.id === id)[0];
  const [note, setNote] = useState({ visible: false, value: "" });
  const { name, description, toolsId, notes } = currentProject;
  const projectTools = tools.filter((tool) => toolsId.includes(tool.id));
  const [editName, setEditName] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

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
          <Editable
            variant="h3"
            initialValue={name}
            toggleEdit={(currentName) =>
              updateName(
                currentName,
                name,
                editName,
                currentProject,
                uid,
                setEditName
              )
            }
            editable={editName}
          />
          <EditableTextArea
            initialValue={description}
            toggleEdit={(currentDesc) =>
              updateDesc(
                currentDesc,
                description,
                editDesc,
                currentProject,
                uid,
                setEditDesc
              )
            }
            editable={editDesc}
          />
          <Divider size={0} style={{ marginBottom: "1rem" }} />
          <InputLabel style={{ fontWeight: "bold" }}>Status</InputLabel>
          <Dropdown
            id="Status"
            style={{
              textTransform: "capitalize",
            }}
            list={["todo", "doing", "done", "reviewing"]}
            value={currentProject.status}
            onChange={(e) =>
              updateStatus(e.target.value as status, uid, currentProject)
            }
          />
          <Text variant="h4">Tools</Text>
          <Row style={{ flexWrap: "wrap" }}>
            {projectTools.length ? (
              projectTools.map((item) => (
                <Chip
                  value={item.name}
                  icon={
                    <CancelIcon
                      onClick={() => removeTool(item.id, uid, currentProject)}
                    />
                  }
                  color="secondary"
                />
              ))
            ) : (
              <Text>No tools added yet</Text>
            )}
          </Row>
          <Pile style={{ alignItems: "center", marginTop: "0.4rem" }}>
            <Button
              style={{ marginBottom: "0.2rem" }}
              onClick={() =>
                setNote({
                  ...note,
                  visible: true,
                })
              }
            >
              Add Note
            </Button>
            {note.visible ? (
              <Card elevation={3}>
                <Textarea
                  rows={5}
                  style={{ width: "20rem" }}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      value: e.target.value,
                    })
                  }
                />
                <Row
                  style={{
                    margin: "0.2rem 0.4rem",
                    width: "20rem",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Button
                    color="success"
                    onClick={() => addNote(note, setNote, uid, currentProject)}
                  >
                    Add
                  </Button>
                  <Button
                    color="error"
                    onClick={() =>
                      setNote({
                        value: "",
                        visible: false,
                      })
                    }
                  >
                    Cancel
                  </Button>
                </Row>
              </Card>
            ) : null}
            <Row
              style={{
                flexWrap: "wrap",
                flex: 1,
                justifyContent: "space-evenly",
              }}
            >
              {notes.map((item, idx) => (
                <Note
                  key={idx}
                  value={item}
                  deleteNote={() =>
                    deleteNote(setNote, idx, uid, currentProject)
                  }
                />
              ))}
            </Row>
          </Pile>
        </Pile>
      </Scroll>
    </Pane>
  );
}
