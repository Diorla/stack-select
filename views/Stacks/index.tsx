import Layout from "components/Layout";
import Section from "components/Section";
import { useUser } from "context";
import React, { useState } from "react";
import StackHeader from "./StackHeader";
import Modal from "components/Modal";
import SearchAppBar from "components/SearchAppBar";
import Text from "components/Text";
import StackListRender from "./StackListRender";
import StackForm from "./StackForm";

export default function Stacks() {
  const { stacks, loadingStack } = useUser();
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  if (loadingStack || loadingStack) return <div>Stacks loading</div>;
  return (
    <Layout
      activePath="stack"
      appBar={
        <SearchAppBar
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
      }
    >
      <Section
        headerHeight={40}
        header={<StackHeader addNewStack={() => setVisible(true)} />}
        scrollStyle={{ display: "flex" }}
      >
        <Modal visible={visible} onClose={() => setVisible(false)}>
          <Text variant="h3" style={{ textAlign: "center" }}>
            New Stack
          </Text>
          <StackForm
            initialValues={{
              name: "",
              description: "",
              id: "",
              modified: 0,
            }}
            onClose={() => setVisible(false)}
          />
        </Modal>
        <StackListRender
          stacks={stacks}
          searchValue={searchValue.toLowerCase()}
        />
      </Section>
    </Layout>
  );
}
