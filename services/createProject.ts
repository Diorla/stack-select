import firebase from "init/clientApp";
import project from "interfaces/project";

export default async function createProject(
  userId: string,
  project: project
): Promise<void> {
  const db = firebase.firestore();
  return await db.doc(`users/${userId}/projects/${project.id}`).set(project);
}
