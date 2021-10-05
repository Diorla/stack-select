import React from "react";
import ToolInfo from "./ToolInfo";

export default function Tool({
  goBack,
  toolId,
}: {
  goBack: () => void;
  toolId: string;
}) {
  return <ToolInfo goBack={goBack} toolId={toolId} />;
}
