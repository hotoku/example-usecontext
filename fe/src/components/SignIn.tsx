import { User } from "../types/user";
import { sleep } from "../utils";

async function signIn(id: string, password: string): Promise<User> {
  console.log("sign in", id, password);
  await sleep(1000);
  return {
    name: "test user",
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
