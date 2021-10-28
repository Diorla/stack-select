import Button from "components/Button";
import Row from "components/Row";
import Text from "components/Text";

export default function StackHeader({
  addNewStack,
}: {
  addNewStack: () => void;
}) {
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 4px",
      }}
    >
      <Text variant="h2">Stacks</Text>
      <Button variant="outlined" color="primary" onClick={addNewStack}>
        New Stack
      </Button>
    </Row>
  );
}
