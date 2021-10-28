import project from "interfaces/project";
import stack from "interfaces/stack";
import tool from "interfaces/tool";
import { useEffect, useState } from "react";

export interface currentToolProps extends tool {
  currentStack?: stack;
  projectList: project[];
}

const initialTool = {
  id: "",
  name: "",
  rating: 0,
  description: "",
  modified: 0,
  stackId: "",
  projectList: [],
};

export interface useToolProps {
  tools: tool[];
  stacks: stack[];
  projects: project[];
  id?: string;
}

export default function useTool({
  tools,
  stacks = [],
  projects = [],
  id,
}: useToolProps) {
  const [currentTool, setTool] = useState<currentToolProps>(initialTool);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const currentTool = tools.filter((tool) => tool.id === id)[0];
    if (currentTool.id) {
      const currentStack = stacks.filter(
        (stack) => stack.id === currentTool.stackId
      )[0];
      const projectList = projects.filter((project) =>
        project.toolsId.includes(currentTool.id)
      );
      setTool({ ...currentTool, currentStack, projectList });
    }
    setLoading(false);
  }, [id]);
  return { currentTool, loading };
}
