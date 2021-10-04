import firebase from "init/clientApp";
import project from "interfaces/project";

export default async function deleteProject(
  userId: string,
  projectID: string
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/projects/${projectID}`).delete();
}
