import Pile from "./Pile";
import Text from "./Text";

export default function Stats({
  value,
  title,
}: {
  value: number;
  title: string;
}) {
  return (
    <Pile style={{ marginRight: "0.2rem" }}>
      <Text variant="h3">{value}</Text>
      <Text variant="subtitle1">{title}</Text>
    </Pile>
  );
}
