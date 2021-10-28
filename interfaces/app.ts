import project from "./project";
import stack from "./stack";
import tool from "./tool";
import user from "./user";

export default interface app {
  user: user;
  loadingUser: boolean;
  userError: Error | null;
  projectError: Error | null;
  stackError: Error | null;
  toolError: Error | null;
  projects: project[];
  loadingProject: boolean;
  stacks: stack[];
  loadingStack: boolean;
  tools: tool[];
  loadingTool: boolean;
}
