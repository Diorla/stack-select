import Divider from "components/Divider";
import Masonry from "components/Masonry";
import Pile from "components/Pile";
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
      <Masonry>
        {list.map((item) => (
          <ToolCard tool={item} key={item.id} />
        ))}
      </Masonry>
    </Pile>
  ) : null;
}
