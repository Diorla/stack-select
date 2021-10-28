import project from "interfaces/project";
import createProject from "services/createProject";

export default function updateInfo(
  uid: string,
  currentProject: project,
  name: string,
  description: string,
  callback?: () => void
) {
  createProject(uid, {
    ...currentProject,
    description,
    name,
  }).then(() => callback && callback());
}
