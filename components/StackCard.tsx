import { useUser } from "context";
import stack from "interfaces/stack";
import Link from "next/link";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import deleteStack from "services/deleteStack";
import MainCard from "./MainCard";
import NavLink from "./NavLink";
import Row from "./Row";
import Text from "./Text";

export default function StackCard({ stack }: { stack: stack }) {
  const { tools } = useUser();
  const { name, description, id } = stack;
  const stackTools = tools.filter((tool) => tool.stackId === id);
  const [deleteModal, setDeleteModal] = useState(false);
  const {
    user: { uid },
  } = useUser();

  const deleteThis = () => {
    deleteStack(uid, stack.id).then(() => setDeleteModal(false));
  };

  return (
    <MainCard
      header={
        <Row style={{ justifyContent: "space-between", padding: "0.4rem" }}>
          <Link href={`/stack/${id}`} passHref>
            <NavLink>
              <Text variant="h3" style={{ cursor: "pointer", color: "black" }}>
                {name}
              </Text>
            </NavLink>
          </Link>
        </Row>
      }
      footer={
        <Row
          style={{
            justifyContent: "space-between",
            padding: "0.4rem",
          }}
        >
          <Text variant="caption">{stackTools.length} tools</Text>
          <MdDelete
            style={{ cursor: "pointer", height: 24, width: 24 }}
            onClick={() => setDeleteModal(true)}
          />
        </Row>
      }
      color="primary"
      visible={deleteModal}
      name={stack.name}
      onClose={function (): void {
        setDeleteModal(false);
      }}
      onDelete={function (): void {
        deleteThis();
      }}
    >
      <Text style={{ padding: "0.4rem", wordBreak: "break-word" }}>
        {description}
      </Text>
    </MainCard>
  );
}
