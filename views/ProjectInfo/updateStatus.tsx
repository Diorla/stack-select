import project, { status } from "interfaces/project";
import createProject from "services/createProject";

export default function updateStatus(
  value: status,
  uid: string,
  currentProject: project
) {
  createProject(uid, {
    ...currentProject,
    status: value,
  });
}
