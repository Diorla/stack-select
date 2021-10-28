import Pile from "./Pile";
import Text from "./Text";

interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  title: string;
  active?: boolean;
}

export default function Stats({ value, title, active, ...props }: StatsProps) {
  return (
    <Pile
      style={{
        marginRight: "0.2rem",
        backgroundColor: active ? "rgba(0, 0, 0, 0.1" : "initial",
        cursor: "pointer",
      }}
      {...props}
    >
      <Text variant="h3" style={{ textAlign: "center" }}>
        {value}
      </Text>
      <Text variant="subtitle1">{title}</Text>
    </Pile>
  );
}
