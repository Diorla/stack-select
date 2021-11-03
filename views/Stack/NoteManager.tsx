import Button from "components/Button";
import Card from "components/Card";
import Note from "components/Note";
import Pile from "components/Pile";
import Row from "components/Row";
import Textarea from "components/Textarea";
import { useUser } from "context";
import stack from "interfaces/stack";
import React, { useState } from "react";
import styled from "styled-components";
import addNote from "./addNote";
import deleteNote from "./deleteNote";

const Masonry = styled.div`
  column-count: 1;
  column-gap: 10px;
  margin: auto;

  & > div {
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
  }

  @media (min-width: 980px) {
    column-count: 2;
  }
  @media (min-width: 1220px) {
    column-count: 3;
  }
`;

export default function NoteManager({ currentStack }: { currentStack: stack }) {
  const [note, setNote] = useState({ visible: false, value: "" });
  const {
    user: { uid },
  } = useUser();

  const { notes = [] } = currentStack;
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
              onClick={() => addNote(note, setNote, uid, currentStack)}
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
      <Masonry>
        {notes.map((item, idx) => (
          <Note
            key={idx}
            value={item}
            deleteNote={() => deleteNote(idx, uid, currentStack)}
          />
        ))}
      </Masonry>
    </Pile>
  );
}
