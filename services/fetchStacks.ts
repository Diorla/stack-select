import firebase from "init/clientApp";

/**
 * Used to fetch and monitor if there are any changes
 * @param userId the user id
 * @param callback it will contain array of all activities
 */
export default async function fetchStacks(
  userId: string,
  callback: (e: any[]) => void
): Promise<void> {
  const db = firebase.firestore();

  const collectionRef = db
    .collection(`users/${userId}/stacks`)
    .orderBy("name", "asc");

  collectionRef.onSnapshot((querySnapshot) => {
    const stackList: any[] = [];
    querySnapshot.forEach((doc: any) => {
      stackList.push(doc.data());
    });
    callback(stackList);
  });
}
