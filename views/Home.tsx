import Hidden from "components/Hidden";
import Pane from "components/Pane";
import Row from "components/Row";
import Text from "components/Text";
import Layout from "./Layout";
import { IoGrid } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import React from "react";
import PanelIcon from "components/PanelIcon";
import Stats from "components/Stats";
import ProjectCard from "components/ProjectCard";
import Scroll from "components/Scroll";
import { status } from "interfaces/project";
import SearchInput from "components/SearchInput";
import Button from "components/Button";
import Category from "components/Category";

const list: number[] = [];
for (let i = 0; i < 1000; i++) {
  list.push(i);
}

const colors: status[] = ["doing", "done", "reviewing", "todo"];
export default function Home() {
  return (
    <Layout>
      <Row style={{ flex: 1 }}>
        <Pane style={{ flex: 1, padding: "0.2rem" }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Text variant="h2">Projects</Text>
            <Row>
              <PanelIcon icon={<MdViewList />} />
              <PanelIcon icon={<IoGrid />} active />
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
              <ProjectCard key={item} status={colors[item % 4]} />
            ))}
          </Scroll>
        </Pane>
        <Hidden smDown>
          <Pane
            style={{
              width: "clamp(320px, 40%, 360px)",
            }}
          >
            <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
              <SearchInput />
            </Row>
            <Row style={{ justifyContent: "center", marginTop: "0.4rem" }}>
              <Button color="secondary">New Stack</Button>
            </Row>
            <Scroll offset={8}>
              {list.map((item) => (
                <Category key={item} />
              ))}
            </Scroll>
          </Pane>
        </Hidden>
      </Row>
    </Layout>
  );
}
