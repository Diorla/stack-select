import React from "react";
import stack from "interfaces/stack";
import createStack from "services/createStack";

export default function addNote(
  note: {
    visible: boolean;
    value: string;
  },
  setNote: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      value: string;
    }>
  >,
  uid: string,
  currentStack: stack
) {
  const { notes = [] } = currentStack;
  if (note.value)
    createStack(uid, {
      ...currentStack,
      notes: [...notes, note.value],
    }).then(() =>
      setNote({
        value: "",
        visible: false,
      })
    );
}
