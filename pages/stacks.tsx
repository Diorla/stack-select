import Layout from "components/Layout";
import Row from "components/Row";
import React, { useState } from "react";
import ErrorBoundary from "views/ErrorBoundary";
import Stack from "views/Stack";
import Stacks from "views/Stacks";

const list: number[] = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

export default function StackPage() {
  const [stack, setStack] = useState("");
  return (
    <Layout activePath="stack" appBar={null}>
      <ErrorBoundary>
        <Row style={{ flex: 1 }}>
          {stack ? (
            <Stack goBack={() => setStack("")} stackId={stack} />
          ) : (
            <Stacks openStack={(stack) => setStack(stack)} />
          )}
        </Row>
      </ErrorBoundary>
    </Layout>
  );
}