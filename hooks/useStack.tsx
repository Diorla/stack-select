import stack from "interfaces/stack";
import { useEffect, useState } from "react";

export default function useStack(stacks: stack[], id?: string) {
  const [currentStack, setStack] = useState<stack>({
    name: "",
    description: "",
    id: "",
    modified: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const currentStack = stacks.filter((tool) => tool.id === id)[0];
    if (currentStack?.id) setStack(currentStack);
    setLoading(false);
  }, [id]);
  return { currentStack, loading };
}
