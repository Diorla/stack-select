import styled from "styled-components";
import Button from "./Button";
import Row from "./Row";
import Pile from "./Pile";
import Text from "./Text";

const NoteWrapper = styled(Pile)`
  background: ${({ theme }) => theme.palette.primary.main}1a;
  margin: 0.2rem;
  border-radius: 0.4rem;
`;
export default function Note({
  value,
  deleteNote,
}: {
  value: string;
  deleteNote: () => void;
}) {
  return (
    <NoteWrapper>
      <Text>{value}</Text>
      <Row style={{ justifyContent: "flex-end" }}>
        <Button variant="text" onClick={deleteNote}>
          Delete
        </Button>
      </Row>
    </NoteWrapper>
  );
}
