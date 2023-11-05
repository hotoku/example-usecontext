import { User } from "../types/user";
import { sleep } from "../utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

async function signIn(id: string, password: string): Promise<void> {
  console.log("sign in", id, password);
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(getAuth(), provider);
  const user = cred.user;
  const token = await user.getIdToken();
  console.log("token", token);
}

function SignIn({ setUser }: { setUser: (user: User) => void }): JSX.Element {
  return (
    <div>
      <button
        onClick={() => {
          signIn("test", "test pw").then((user) => {});
        }}
      >
        sign in
      </button>
    </div>
  );
}

export default SignIn;
