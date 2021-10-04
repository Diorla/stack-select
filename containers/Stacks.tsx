import Pane from "components/Pane";
import StackCard from "components/StackCard";
import Row from "components/Row";
import Scroll from "components/Scroll";
import Text from "components/Text";
import React from "react";
import Button from "components/Button";

export default function Stacks({
  openStack,
}: {
  openStack: (str: string) => void;
}) {
  const list: number[] = [];
  for (let i = 0; i < 100; i++) {
    list.push(i);
  }

  return (
    <Pane style={{ flex: 1, padding: "0.2rem" }}>
      <Row style={{ justifyContent: "space-between" }}>
        <Text variant="h2">Stacks</Text>
        <Row>
          <Button variant="outlined" color="primary">
            New Stack
          </Button>
        </Row>
      </Row>
      <Scroll
        offset={11}
        style={{ flexDirection: "row", justifyContent: "space-evenly" }}
      >
        {list.map((item) => (
          <StackCard key={item} openStack={() => openStack("Stack name")} />
        ))}
      </Scroll>
    </Pane>
  );
}
