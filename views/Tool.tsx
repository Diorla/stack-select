import React, { useState } from "react";
import ToolInfo from "./ToolInfo";

export default function Tool({ goBack }: { goBack: () => void }) {
  return <ToolInfo goBack={goBack} />;
}
