import { User } from "../types/user";
import { base64UrlDecode, sleep } from "../utils";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

async function signIn(id: string, password: string): Promise<User> {
  console.log("sign in", id, password);
  const provider = new GoogleAuthProvider();
  const cred = await signInWithPopup(getAuth(), provider);
  const user = cred.user;
  const token = await user.getIdToken();
  const payload = token.split(".")[1];
  const decoded = JSON.parse(base64UrlDecode(payload));
  return {
    name: decoded.name,
  };
}

function SignIn({ setUser }: { setUser: (user: User) => void }): JSX.Element {
  return (
    <div>
      <button
        onClick={() => {
          signIn("test", "test pw").then((user) => {
            setUser(user);
          });
        }}
      >
        sign in
      </button>
    </div>
  );
}

export default SignIn;
