import project from "interfaces/project";
import createProject from "services/createProject";
import toggleItemInList from "scripts/toggleItemInList";

export default function removeTool(
  id: string,
  uid: string,
  currentProject: project
) {
  createProject(uid, {
    ...currentProject,
    toolsId: toggleItemInList(currentProject.toolsId, id),
  });
}
