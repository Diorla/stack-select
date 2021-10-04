import Row from "components/Row";
import Layout from "./Layout";
import React from "react";

export default function Home() {
  return (
    <Layout activePath="tool">
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
