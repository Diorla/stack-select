import stack from "interfaces/stack";
import createStack from "services/createStack";

export default function deleteNote(
  idx: number,
  uid: string,
  currentStack: stack
) {
  const { notes = [] } = currentStack;
  createStack(uid, {
    ...currentStack,
    notes: [...notes.slice(0, idx), ...notes.slice(idx + 1)],
  });
}
