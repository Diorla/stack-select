import Pane from "components/Pane";
import ProjectCard from "components/ProjectCard";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Stats from "components/Stats";
import Text from "components/Text";
import { status } from "interfaces/project";
import React from "react";
import Button from "components/Button";

export default function Projects({
  openProject,
}: {
  openProject: (str: string) => void;
}) {
  const list: number[] = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }

  const colors: status[] = ["doing", "done", "reviewing", "todo"];

  return (
    <Pane style={{ flex: 1, padding: "0.2rem" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text variant="h2">Projects</Text>
        <Row>
          <Button variant="outlined" color="primary">
            New Project
          </Button>
        </Row>
      </Row>
      <Row>
        <Stats value="23" title="In progress" />
        <Stats value="14" title="Completed" />
        <Stats value="52" title="Total" />
      </Row>
      <Scroll
        offset={11}
        style={{ flexDirection: "row", justifyContent: "space-evenly" }}
      >
        {list.map((item) => (
          <ProjectCard
            key={item}
            status={colors[item % 4]}
            openProject={() => openProject("project name")}
          />
        ))}
      </Scroll>
    </Pane>
  );
}
