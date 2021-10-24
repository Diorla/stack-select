import NavLink from "components/NavLink";
import Row from "components/Row";
import Text from "components/Text";
import Link from "next/link";
import React from "react";

export default function UserHeader({ name }: { name: string }) {
  return (
    <Row>
      <Text>
        <Link href="/" passHref>
          <NavLink style={{ cursor: "pointer", fontWeight: "bold" }}>
            Projects
          </NavLink>
        </Link>
        /{name}
      </Text>
    </Row>
  );
}
