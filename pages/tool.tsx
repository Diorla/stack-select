import Row from "components/Row";
import React, { useState } from "react";
import Layout from "views/Layout";
import Tool from "views/Tool";
import Tools from "views/Tools";

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
          <Tool goBack={() => setTool("")} toolId={tool} />
        ) : (
          <Tools openTool={(tool) => setTool(tool)} />
        )}
      </Row>
    </Layout>
  );
}
