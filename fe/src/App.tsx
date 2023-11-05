import { useState } from "react";
import { User } from "./types/user";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div>{user ? user.name : "no user"}</div>
    </>
  );
}

export default App;
