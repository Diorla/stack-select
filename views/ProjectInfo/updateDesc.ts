import project from "interfaces/project";
import createProject from "services/createProject";

export default function updateDesc(
  newDesc: string,
  prevDesc: string,
  editDesc: boolean,
  currentProject: project,
  uid: string,
  setEditDesc: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (editDesc && newDesc !== prevDesc) {
    createProject(uid, {
      ...currentProject,
      description: newDesc,
    });
  }
  setEditDesc(!editDesc);
}
