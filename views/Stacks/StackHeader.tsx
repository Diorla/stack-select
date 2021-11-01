import Button from "components/Button";
import Row from "components/Row";
import Text from "components/Text";
import { useUser } from "context";

export default function StackHeader({
  addNewStack,
}: {
  addNewStack: () => void;
}) {
  const { stacks } = useUser();
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 4px",
      }}
    >
      <Text variant="h2">Stacks: {stacks.length}</Text>
      <Button variant="outlined" color="primary" onClick={addNewStack}>
        New Stack
      </Button>
    </Row>
  );
}
