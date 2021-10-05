import firebase from "init/clientApp";

export default async function deleteStack(
  userId: string,
  stackID: string
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/stacks/${stackID}`).delete();
}
