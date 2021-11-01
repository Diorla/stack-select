import React, { useState } from "react";
import Layout from "components/Layout";
import Section from "components/Section";
import { useUser } from "context";
import NoSearchAppBar from "components/NoSearchAppBar";
import Hidden from "components/Hidden";
import ItemPageHeader from "../../components/ItemPageHeader";
import Pile from "components/Pile";
import Text from "components/Text";
import Status from "./Status";
import Tools from "./Tools";
import NoteManager from "./NoteManager";
import { MdEdit } from "react-icons/md";
import SidebarTools from "./SidebarTools";
import SidebarStacks from "./SidebarStacks";
import Modal from "components/Modal";
import ProjectForm from "views/Home/ProjectForm";

export default function Project({ id }: { id: string }) {
  const [visible, setVisible] = useState(false);
  const [stackId, setStackId] = useState("");
  const { projects } = useUser();

  const currentProject = projects.filter((project) => project.id === id)[0];

  return (
    <Layout activePath="home" appBar={<NoSearchAppBar />}>
      {currentProject?.id ? (
        <>
          <Section
            headerHeight={35}
            header={<ItemPageHeader href="/" name={currentProject.name} />}
            style={{ flex: 5 }}
          >
            <Modal visible={visible} onClose={() => setVisible(false)}>
              <Text variant="h3" style={{ textAlign: "center" }}>
                Update Project
              </Text>
              <ProjectForm
                initialValues={currentProject}
                onClose={() => setVisible(false)}
              />
            </Modal>
            <Pile>
              <Text
                variant="h3"
                style={{ display: "flex", alignItems: "center" }}
              >
                {currentProject.name}{" "}
                <MdEdit
                  onClick={() => setVisible(true)}
                  style={{ cursor: "pointer" }}
                />
              </Text>
              <Text
                style={{
                  border: "1px solid silver",
                  padding: 2,
                }}
              >
                {currentProject.description}
              </Text>
              <Status currentProject={currentProject} />
              <Tools currentProject={currentProject} />
              <NoteManager currentProject={currentProject} />
            </Pile>
          </Section>
          <Hidden mdDown>
            {stackId ? (
              <SidebarTools
                stackId={stackId}
                currentProject={currentProject}
                resetStackId={() => setStackId("")}
              />
            ) : (
              <SidebarStacks setStackId={(id) => setStackId(id)} />
            )}
          </Hidden>
        </>
      ) : (
        <div>Sorry, no project found</div>
      )}
    </Layout>
  );
}
