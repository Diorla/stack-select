import React from "react";
import project from "interfaces/project";
import createProject from "services/createProject";

export default function deleteNote(
  setNote: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      value: string;
    }>
  >,
  idx: number,
  uid: string,
  currentProject: project
) {
  createProject(uid, {
    ...currentProject,
    notes: [
      ...currentProject.notes.slice(0, idx),
      ...currentProject.notes.slice(idx + 1),
    ],
  }).then(() =>
    setNote({
      value: "",
      visible: false,
    })
  );
}
