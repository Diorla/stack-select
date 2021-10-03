import Row from "./Row";
import Stack from "./Stack";
import Text from "./Text";

export default function Category() {
  return (
    <Stack style={{ borderBottom: "1px solid silver", width: "100%" }}>
      <Row style={{ marginBottom: "0.8rem" }}>Stack name</Row>
      <Row
        style={{
          justifyContent: "space-between",
        }}
      >
        <Text>Dec 12, 2020</Text>
        <Text>21 tools</Text>
      </Row>
    </Stack>
  );
}
