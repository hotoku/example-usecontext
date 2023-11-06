import { useState } from "react";
import Panel1 from "./Panel1";
import useText from "../hooks/useText";
import TextContext from "../contexts/text";
import NumContext from "../contexts/num";

function App() {
  const textContext = useText();
  const [num, setNum] = useState(0);

  return (
    <>
      <TextContext.Provider value={textContext}>
        <NumContext.Provider value={{ num, setNum }}>
          <Panel1 />
        </NumContext.Provider>
      </TextContext.Provider>
    </>
  );
}

export default App;
