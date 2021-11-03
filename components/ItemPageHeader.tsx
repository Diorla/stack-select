import NavLink from "components/NavLink";
import Row from "components/Row";
import Text from "components/Text";
import Link from "next/link";
import React from "react";
import { MdMenu } from "react-icons/md";
import styled from "styled-components";
import Hidden from "./Hidden";

const Styled = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const Menu = styled(MdMenu)`
  font-size: 24px;
  cursor: pointer;
`;

export default function ItemPageHeader({
  name,
  href,
  onClick,
}: {
  name: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <Styled>
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
      <Hidden lgUp>{onClick ? <Menu onClick={onClick} /> : null}</Hidden>
    </Styled>
  );
}
