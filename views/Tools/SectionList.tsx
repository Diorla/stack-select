import Divider from "components/Divider";
import Pile from "components/Pile";
import Row from "components/Row";
import Text from "components/Text";
import ToolCard from "components/ToolCard";
import tool from "interfaces/tool";

export default function SectionList({
  stack,
  list,
  hideDivider,
}: {
  stack: string;
  list: tool[];
  hideDivider?: boolean;
}) {
  return list.length ? (
    <Pile>
      {hideDivider ? null : <Divider size={2} />}
      <Text variant="h3">{stack}</Text>
      <Row style={{ padding: 4, justifyContent: "space-evenly" }}>
        {list.map((item) => (
          <ToolCard tool={item} key={item.id} />
        ))}
      </Row>
    </Pile>
  ) : null;
}
