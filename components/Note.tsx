import styled from "styled-components";
import Button from "./Button";
import Row from "./Row";
import Stack from "./Stack";
import Text from "./Text";

const NoteWrapper = styled(Stack)`
  width: 12rem;
  background: ${({ theme }) => theme.palette.primary.main}1a;
  margin: 0.2rem;
  border-radius: 0.4rem;
`;
export default function Note() {
  return (
    <NoteWrapper>
      <Text>Sunt eiusmod incididunt labore non voluptate anim eu.</Text>
      <Row style={{ justifyContent: "flex-end" }}>
        <Button variant="text">Delete</Button>
      </Row>
    </NoteWrapper>
  );
}
