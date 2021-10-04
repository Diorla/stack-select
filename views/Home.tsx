import Row from "components/Row";
import Layout from "./Layout";
import React, { useState } from "react";
import Projects from "containers/Projects";
import Project from "containers/Project";

const list: number[] = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

export default function Home() {
  const [project, setProject] = useState("");
  return (
    <Layout activePath="home">
      <Row style={{ flex: 1 }}>
        {project ? (
          <Project goBack={() => setProject("")} />
        ) : (
          <Projects openProject={(project) => setProject(project)} />
        )}
      </Row>
    </Layout>
  );
}
