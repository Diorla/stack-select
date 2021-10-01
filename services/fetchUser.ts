import firebase from "init/clientApp";
import user from "interfaces/user";
import initialUser from "../context/initialUser";

export default async function getUserInfo(
  userId: string,
  firebaseData: {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
  },
  callback: (arg0: user) => void
): Promise<void> {
  const db = firebase.firestore();

  const doc = db.collection("users").doc(userId);

  doc.onSnapshot((doc) => {
    const data = doc.data() || {};
    const formattedData = {
      ...initialUser,
      ...firebaseData,
      ...(data as user),
    };
    callback(formattedData);
  });
}
