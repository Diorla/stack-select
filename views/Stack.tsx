import React from "react";
import SidebarTools from "./SidebarTools";
import StackInfo from "./StackInfo";

export default function Stack({
  goBack,
  stackId,
}: {
  goBack: () => void;
  stackId: string;
}) {
  return (
    <>
      <StackInfo goBack={goBack} stackId={stackId} />
      <SidebarTools
        visible={true}
        goBack={() => null}
        stackId={stackId}
        projectID={""}
      />
    </>
  );
}
