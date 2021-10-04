import firebase from "init/clientApp";
function signInWithGoogle(): void {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => console.log("Login successful"))
    .catch((err) => console.error(err.message));
}

export default function SignIn() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  );
}
