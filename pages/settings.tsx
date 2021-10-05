import Row from "components/Row";
import React from "react";
import Layout from "views/Layout";

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
