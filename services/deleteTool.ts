import firebase from "init/clientApp";

export default async function deleteTool(
  userId: string,
  toolID: string
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/tools/${toolID}`).delete();
}
