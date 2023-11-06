import { useState } from "react";

function useText() {
  const [text, setText] = useState("");
  return {
    text,
    setText,
  };
}

export default useText;
