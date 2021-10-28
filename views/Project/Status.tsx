import InputLabel from "components/InputLabel";
import Radio from "components/RadioInput";
import { useUser } from "context";
import project from "interfaces/project";
import React from "react";
import updateStatus from "./updateStatus";

export default function Status({
  currentProject,
}: {
  currentProject: project;
}) {
  const {
    user: { uid },
  } = useUser();
  return (
    <>
      <InputLabel style={{ fontWeight: "bold", marginTop: 8 }}>
        Status
      </InputLabel>
      <Radio
        label="Todo"
        id="todo"
        name="status"
        checked={currentProject.status === "todo"}
        onChange={() => updateStatus("todo", uid, currentProject)}
      />
      <Radio
        label="Doing"
        id="doing"
        name="status"
        checked={currentProject.status === "doing"}
        onChange={() => updateStatus("doing", uid, currentProject)}
      />
      <Radio
        label="Done"
        id="done"
        name="status"
        checked={currentProject.status === "done"}
        onChange={() => updateStatus("done", uid, currentProject)}
      />
      <Radio
        label="Reviewing"
        id="reviewing"
        name="status"
        checked={currentProject.status === "reviewing"}
        onChange={() => updateStatus("reviewing", uid, currentProject)}
      />
    </>
  );
}
