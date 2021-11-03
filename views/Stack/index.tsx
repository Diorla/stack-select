import Hidden from "components/Hidden";
import ItemPageHeader from "components/ItemPageHeader";
import Layout from "components/Layout";
import Modal from "components/Modal";
import NoSearchAppBar from "components/NoSearchAppBar";
import Pile from "components/Pile";
import Section from "components/Section";
import Text from "components/Text";
import { useUser } from "context";
import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import SidebarTools from "views/Project/SidebarTools";
import StackForm from "views/Stacks/StackForm";
import NoteManager from "./NoteManager";

export default function Stack({ id }: { id: string }) {
  const { stacks, loadingStack } = useUser();
  const [visible, setVisible] = useState(false);

  const currentStack = stacks.filter((tool) => tool.id === id)[0];
  if (loadingStack) return <div>loading</div>;
  if (!currentStack?.id) return <div>No stack found</div>;
  return (
    <Layout activePath="stack" appBar={<NoSearchAppBar />}>
      {currentStack ? (
        <Section
          header={<ItemPageHeader href="/stacks" name={currentStack.name} />}
          headerHeight={40}
          style={{ flex: 5 }}
        >
          <Modal visible={visible} onClose={() => setVisible(false)}>
            <Text variant="h3" style={{ textAlign: "center" }}>
              Update Stack
            </Text>
            <StackForm
              initialValues={currentStack}
              onClose={() => setVisible(false)}
            />
          </Modal>
          <Pile>
            <Text
              variant="h3"
              style={{ display: "flex", alignItems: "center" }}
            >
              {currentStack.name}{" "}
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
              {currentStack.description || "No description"}
            </Text>
            <NoteManager currentStack={currentStack} />
          </Pile>
        </Section>
      ) : (
        <Text>Stack not found</Text>
      )}
      <Hidden mdDown>
        <SidebarTools
          stackId={currentStack.id}
          resetStackId={() => null}
          hideFilter
        />
      </Hidden>
    </Layout>
  );
}
