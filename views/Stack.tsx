import React, { useState } from "react";
import SidebarTools from "./SidebarTools";
import StackInfo from "./StackInfo";

export default function Stack({ goBack }: { goBack: () => void }) {
  return (
    <>
      <StackInfo goBack={goBack} />
      <SidebarTools
        visible={true}
        goBack={() => null}
        stackId={""}
        projectID={""}
      />
    </>
  );
}
