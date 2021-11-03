import project from "interfaces/project";
import createProject from "services/createProject";

export default function deleteNote(
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
  });
}
