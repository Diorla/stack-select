import React, { useState } from "react";
import Layout from "components/Layout";
import Section from "components/Section";
import Row from "components/Row";
import { useUser } from "context";
import ProjectCard from "components/ProjectCard";
import SearchAppBar from "components/SearchAppBar";
import UserHeader from "./UserHeader";
import { status } from "interfaces/project";

const isSameStatus = (projectStatus: status, pageStatus: status | "") => {
  if (pageStatus) return projectStatus === pageStatus;
  return true;
};
export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const { projects, loadingProject } = useUser();
  const [status, setStatus] = useState<status | "">("");

  const toggleStatus = (currentStatus: status | "") => {
    if (currentStatus) {
      if (currentStatus === status) setStatus("");
      else setStatus(currentStatus);
    } else setStatus(currentStatus);
  };
  return (
    <Layout
      activePath="home"
      appBar={<SearchAppBar value={searchValue} onChange={setSearchValue} />}
    >
      {loadingProject ? (
        <div>Project loading</div>
      ) : (
        <Section
          headerHeight={70}
          header={<UserHeader onClick={toggleStatus} status={status} />}
        >
          <Row style={{ justifyContent: "space-evenly" }}>
            {projects
              .filter(
                (item) =>
                  `${item.name} ${item.description}`
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) &&
                  isSameStatus(item.status, status)
              )
              .map((item) => (
                <ProjectCard key={item.id} project={item} />
              ))}
          </Row>
        </Section>
      )}
    </Layout>
  );
}
