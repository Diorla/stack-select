import Layout from "components/Layout";
import Row from "components/Row";
import React from "react";

export default function Settings() {
  return (
    <Layout activePath="tool" appBar={null}>
      <Row
        style={{
          flex: 1,
          height: "calc(100vh - 5rem)",
          backgroundColor: "white",
        }}
      >
        <div>This is settings</div>
      </Row>
    </Layout>
  );
}
