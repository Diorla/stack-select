import Stack from "./Stack";
import Text from "./Text";

export default function Stats({
  value,
  title,
}: {
  value: string;
  title: string;
}) {
  return (
    <Stack style={{ marginRight: "0.2rem" }}>
      <Text variant="h3">{value}</Text>
      <Text variant="subtitle1">{title}</Text>
    </Stack>
  );
}
