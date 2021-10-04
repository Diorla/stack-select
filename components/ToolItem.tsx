import React from "react";
import Radio from "./Radio";
import Rating from "./Rating";
import Row from "./Row";
import Pile from "./Pile";
import Text from "./Text";

export default function ToolCard({ checked }: { checked: boolean }) {
  return (
    <Pile style={{ width: "100%", borderBottom: "1px solid silver" }}>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>Svelte</Text>
        <Radio checked={checked} />
      </Row>
      <Row>
        <Rating value={4} onChange={() => null} />
      </Row>
    </Pile>
  );
}