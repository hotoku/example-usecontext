import useFirebase from "../hooks/useFirebase";
import { User } from "../types/user";

function SignIn({
  setUser,
}: {
  setUser: (user: User | null) => void;
}): JSX.Element {
  const { signIn } = useFirebase(setUser);
  return (
    <div>
      <button onClick={signIn}>sign in</button>
    </div>
  );
}

export default SignIn;
