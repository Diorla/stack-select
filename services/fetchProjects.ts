import firebase from "init/clientApp";

/**
 * Used to fetch and monitor if there are any changes
 * @param userId the user id
 * @param callback it will contain array of all activities
 */
export default async function fetchProjects(
  userId: string,
  callback: (e: any[]) => void
): Promise<void> {
  const db = firebase.firestore();

  const collectionRef = db.collection(`users/${userId}/projects`);

  collectionRef.onSnapshot((querySnapshot) => {
    const projectList: any[] = [];
    querySnapshot.forEach((doc: any) => {
      projectList.push(doc.data());
    });
    callback(projectList);
  });
}
