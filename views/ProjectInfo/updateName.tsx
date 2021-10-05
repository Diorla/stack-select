import project from "interfaces/project";
import createProject from "services/createProject";

export default function updateName(
  newName: string,
  prevName: string,
  editName: boolean,
  currentProject: project,
  uid: string,
  setEditName: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (editName && newName !== prevName) {
    createProject(uid, {
      ...currentProject,
      name: newName,
    });
  }
  setEditName(!editName);
}
