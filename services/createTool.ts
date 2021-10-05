import firebase from "init/clientApp";
import tool from "interfaces/tool";

export default async function createTool(
  userId: string,
  tool: tool
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/tools/${tool.id}`).set(tool);
}
