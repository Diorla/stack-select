import NavLink from "components/NavLink";
import Row from "components/Row";
import Text from "components/Text";
import Link from "next/link";
import React from "react";

export default function ItemPageHeader({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <Row>
      <Text>
        <Link href={href} passHref>
          <NavLink
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {href.replace("/", "") || "Projects"}
          </NavLink>
        </Link>
        /{name}
      </Text>
    </Row>
  );
}
