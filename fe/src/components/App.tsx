import { useState } from "react";
import Panel1 from "./Panel1";
import useText from "../hooks/useText";
import TextContext from "../contexts/text";
import NumContext from "../contexts/num";
import Panel2 from "./Panel2";

function App() {
  const textContext = useText();
  const [num, setNum] = useState(0);

  return (
    <>
      <TextContext.Provider value={textContext}>
        <NumContext.Provider value={{ num, setNum }}>
          <Panel1 />
          <Panel2 />
        </NumContext.Provider>
      </TextContext.Provider>
    </>
  );
}

export default App;
