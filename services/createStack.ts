import firebase from "init/clientApp";
import stack from "interfaces/stack";

export default async function createStack(
  userId: string,
  stack: stack
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/stacks/${stack.id}`).set(stack);
}
