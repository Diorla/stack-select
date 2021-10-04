import Row from "components/Row";
import Layout from "./Layout";
import React, { useState } from "react";
import Stacks from "containers/Stacks";
import Stack from "containers/Stack";

const list: number[] = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

export default function Home() {
  const [stack, setStack] = useState("");
  return (
    <Layout activePath="stack">
      <Row style={{ flex: 1 }}>
        {stack ? (
          <Stack goBack={() => setStack("")} />
        ) : (
          <Stacks openStack={(stack) => setStack(stack)} />
        )}
      </Row>
    </Layout>
  );
}
