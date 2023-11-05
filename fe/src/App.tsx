import { useState } from "react";
import { User } from "./types/user";
import SignIn from "./components/SignIn";
import { getAuth } from "firebase/auth";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <>
      <div>{user ? user.name : <SignIn setUser={setUser} />}</div>
      <div>
        <button
          onClick={() => {
            setUser(null);
            getAuth().signOut();
          }}
        >
          sign out
        </button>
      </div>
    </>
  );
}

export default App;
