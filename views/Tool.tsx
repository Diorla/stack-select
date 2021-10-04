import Row from "components/Row";
import Layout from "./Layout";
import React, { useState } from "react";
import Tools from "containers/Tools";
import Tool from "containers/Tool";

const list: number[] = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

export default function Home() {
  const [tool, setTool] = useState("");
  return (
    <Layout activePath="tool">
      <Row style={{ flex: 1 }}>
        {tool ? (
          <Tool goBack={() => setTool("")} />
        ) : (
          <Tools openTool={(tool) => setTool(tool)} />
        )}
      </Row>
    </Layout>
  );
}
