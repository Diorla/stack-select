import { useUser } from "context";
import React from "react";
import ErrorBoundary from "views/ErrorBoundary";
import ToolForm from "views/Tools/ToolForm";

export default function temp() {
  const { stacks } = useUser();
  const stackList = [
    { id: "misc", value: "Misc" },
    ...stacks.map((item) => {
      return {
        id: item.id,
        value: item.name,
      };
    }),
  ];
  return (
    <ErrorBoundary>
      <ToolForm
        initialValues={{
          id: "",
          name: "",
          description: "",
          rating: 0,
          modified: 0,
          stackId: "misc",
        }}
        stackIdList={stackList}
      />
    </ErrorBoundary>
  );
}
