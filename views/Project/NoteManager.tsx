import Button from "components/Button";
import Card from "components/Card";
import Note from "components/Note";
import Pile from "components/Pile";
import Row from "components/Row";
import Textarea from "components/Textarea";
import { useUser } from "context";
import project from "interfaces/project";
import React, { useState } from "react";
import addNote from "./addNote";
import deleteNote from "./deleteNote";

export default function NoteManager({
  currentProject,
}: {
  currentProject: project;
}) {
  const [note, setNote] = useState({ visible: false, value: "" });
  const {
    user: { uid },
  } = useUser();

  return (
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
        {currentProject.notes.map((item, idx) => (
          <Note
            key={idx}
            value={item}
            deleteNote={() => deleteNote(idx, uid, currentProject)}
          />
        ))}
      </Row>
    </Pile>
  );
}
