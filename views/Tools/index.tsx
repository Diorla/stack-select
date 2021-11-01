import Layout from "components/Layout";
import Section from "components/Section";
import Text from "components/Text";
import { useUser } from "context";
import tool from "interfaces/tool";
import React, { useState } from "react";
import ToolHeader from "./ToolHeader";
import Sectioned from "./Sectioned";
import ShowAll from "./ShowAll";
import ToolForm from "./ToolForm";
import Modal from "components/Modal";
import SearchAppBar from "components/SearchAppBar";

export default function Tools() {
  const { tools, loadingTool, stacks, loadingStack } = useUser();
  const [isAll, setIsAll] = useState(true);
  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const stackObj: { [key: string]: string } = {};
  const toolObj: { [key: string]: tool[] } = {
    misc: [],
  };

  stacks.forEach((item) => {
    stackObj[item.id] = item.name;
  });

  tools.forEach((item) => {
    const key = stackObj[item.stackId];
    if (key) {
      if (toolObj[key]) toolObj[key].push(item);
      else toolObj[key] = [item];
    } else toolObj["misc"].push(item);
  });
  if (loadingTool || loadingStack) return <div>Tools loading</div>;
  return (
    <Layout
      activePath="tool"
      appBar={
        <SearchAppBar
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
        />
      }
    >
      <Section
        headerHeight={40}
        header={
          <ToolHeader
            isAll={isAll}
            toggle={() => setIsAll(!isAll)}
            addNewTool={() => setVisible(true)}
          />
        }
        scrollStyle={{ display: "flex" }}
      >
        <Modal visible={visible} onClose={() => setVisible(false)}>
          <Text variant="h3" style={{ textAlign: "center" }}>
            New Tool
          </Text>
          <ToolForm
            initialValues={{
              name: "",
              description: "",
              rating: 0,
              id: "",
              modified: 0,
              stackId: "misc",
            }}
            onClose={() => setVisible(false)}
          />
        </Modal>
        {isAll ? (
          <ShowAll tools={tools} searchValue={searchValue.toLowerCase()} />
        ) : (
          <Sectioned tools={toolObj} searchValue={searchValue.toLowerCase()} />
        )}
      </Section>
    </Layout>
  );
}
