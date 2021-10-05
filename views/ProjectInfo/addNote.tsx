import React from "react";
import project from "interfaces/project";
import createProject from "services/createProject";

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
  currentProject: project
) {
  if (note.value)
    createProject(uid, {
      ...currentProject,
      notes: [...currentProject.notes, note.value],
    }).then(() =>
      setNote({
        value: "",
        visible: false,
      })
    );
}
