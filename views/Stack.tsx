import React from "react";
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
    </>
  );
}
