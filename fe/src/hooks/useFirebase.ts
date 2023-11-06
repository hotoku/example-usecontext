import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { User } from "../types/user";
import { base64UrlDecode } from "../utils";

async function doSignIn(): Promise<User> {
  console.log("sign in");
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

function useFirebase(setUser: (user: User | null) => void) {
  const [loading, setLoading] = useState(false);

  async function signIn() {
    setLoading(true);
    try {
      const user = await doSignIn();
      setUser(user);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return {
    signIn,
    loading,
  };
}

export default useFirebase;
