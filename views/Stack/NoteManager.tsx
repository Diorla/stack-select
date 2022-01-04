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

const Masonry = styled.div<{
  minWidth?: number;
  gap?: number;
  padding?: number;
}>`
  display: grid;
  grid-template-columns: ${({ minWidth = 200 }) =>
    `repeat(auto-fit, minmax(${minWidth}px, 1fr))`};
  gap: ${({ gap = 2 }) => `${gap}px`};
  padding: ${({ padding = 4 }) => `${padding}px`};
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
