import Row from "components/Row";
import React, { useState } from "react";
import Project from "views/Project";
import Layout from "views/Layout";
import Projects from "views/Projects";

export default function Home() {
  const [project, setProject] = useState("");

  return (
    <Layout activePath="home">
      <Row style={{ flex: 1 }}>
        {project ? (
          <Project goBack={() => setProject("")} id={project} />
        ) : (
          <Projects openProject={(project) => setProject(project)} />
        )}
      </Row>
    </Layout>
  );
}
