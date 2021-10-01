import firebase from "init/clientApp";

/**
 * Used to fetch and monitor if there are any changes
 * @param userId the user id
 * @param callback it will contain array of all activities
 */
export default async function fetchTools(
  userId: string,
  callback: (e: any[]) => void
): Promise<void> {
  const db = firebase.firestore();

  const collectionRef = db.collection(`users/${userId}/tools`);

  collectionRef.onSnapshot((querySnapshot) => {
    const toolList: any[] = [];
    querySnapshot.forEach((doc: any) => {
      toolList.push(doc.data());
    });
    callback(toolList);
  });
}
