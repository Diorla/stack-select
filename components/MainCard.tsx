import color from "interfaces/color";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Card from "./Card";
import Divider from "./Divider";
import Modal from "./Modal";
import Pile from "./Pile";
import Row from "./Row";
import Text from "./Text";

const StyledCard = styled(Card)`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export default function MainCard({
  header,
  children,
  footer,
  color,
  visible,
  name,
  onClose,
  onDelete,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  color: color;
  visible: boolean;
  name: string;
  onClose: () => void;
  onDelete: () => void;
}) {
  return (
    <StyledCard elevation={1} color={color}>
      <Modal visible={visible} onClose={onClose}>
        <Pile>
          <Text variant="h4" style={{ textAlign: "center" }}>
            Delete <u>{name}</u>
          </Text>
          <Text>Are you sure?</Text>
          <Text>This action cannot be undone</Text>
          <Row style={{ justifyContent: "space-evenly" }}>
            <Button onClick={onDelete} color="error">
              Delete
            </Button>
            <Button onClick={onClose} color="info">
              Cancel
            </Button>
          </Row>
        </Pile>
      </Modal>
      <Pile style={{ justifyContent: "space-between", flex: 1, width: "100%" }}>
        <Pile>{header}</Pile>
        <Pile style={{ flex: 1, justifyContent: "flex-start" }}>
          {children}
        </Pile>
        <Pile>
          <Divider size={1} color={color} />
          {footer}
        </Pile>
      </Pile>
    </StyledCard>
  );
}
