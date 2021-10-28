import Button from "components/Button";
import Row from "components/Row";
import Text from "components/Text";
import IconButton from "./IconButton";

export default function ToolHeader({
  isAll,
  toggle,
  addNewTool,
}: {
  isAll: boolean;
  toggle: () => void;
  addNewTool: () => void;
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
      <Text variant="h2">Tools</Text>
      <Row>
        <IconButton isAll={isAll} onClick={toggle} />
        <Button variant="outlined" color="primary" onClick={addNewTool}>
          New Tool
        </Button>
      </Row>
    </Row>
  );
}
