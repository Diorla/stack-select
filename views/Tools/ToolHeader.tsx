import Button from "components/Button";
import Row from "components/Row";
import Text from "components/Text";
import IconButton from "./IconButton";
import { useUser } from "context";

export default function ToolHeader({
  isAll,
  toggle,
  addNewTool,
}: {
  isAll: boolean;
  toggle: () => void;
  addNewTool: () => void;
}) {
  const { tools } = useUser();
  return (
    <Row
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "0 4px",
      }}
    >
      <Text variant="h2">Tools: {tools.length}</Text>
      <Row>
        <IconButton isAll={isAll} onClick={toggle} />
        <Button variant="outlined" color="primary" onClick={addNewTool}>
          New Tool
        </Button>
      </Row>
    </Row>
  );
}
