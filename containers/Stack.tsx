import React, { useState } from "react";
import SidebarTools from "./SidebarTools";
import StackInfo from "./StackInfo";

export default function Stacks({ goBack }: { goBack: () => void }) {
  return (
    <>
      <StackInfo goBack={goBack} />
      <SidebarTools visible={true} goBack={() => null} />
    </>
  );
}
