import { useState } from "react";
import { User } from "./types/user";
import SignIn from "./components/SignIn";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div>{user ? user.name : <SignIn />}</div>
    </>
  );
}

export default App;
