import color from "interfaces/color";
import { MdCancel } from "react-icons/md";
import Card from "./Card";
import Divider from "./Divider";
import Row from "./Row";
import Text from "./Text";

export default function StackCard({
  isList,
  openStack,
}: {
  isList?: boolean;
  openStack: () => void;
}) {
  const description = `Laborum velit veniam deserunt cillum. Laborum irure in elit ad. Veniam
        nulla veniam exercitation irure dolor reprehenderit nisi ullamco do in.
        Sunt magna nisi velit sint magna anim pariatur velit. Ipsum est
        reprehenderit officia enim.`;
  return (
    <Card
      elevation={1}
      color="primary"
      style={{
        width: isList ? "90%" : "16rem",
        minHeight: "8rem",
        margin: "0.2rem",
        borderRadius: "0.4rem",
      }}
      onClick={() => openStack()}
    >
      <Row style={{ justifyContent: "space-between", padding: "0.4rem" }}>
        <span />
        <Text variant="h3" style={{ cursor: "pointer" }}>
          Storyx
        </Text>
        <MdCancel style={{ cursor: "pointer" }} />
      </Row>
      <Text style={{ padding: "0.4rem" }}>
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </Text>
      <Row
        style={{
          justifyContent: "flex-end",
          padding: "0.4rem",
        }}
      >
        <Text variant="caption">12 tools</Text>
      </Row>
    </Card>
  );
}
