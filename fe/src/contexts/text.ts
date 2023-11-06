import { createContext } from "react";

type TextContext = {
  text: string;
  setText: (text: string) => void;
};

const TextContext = createContext<TextContext>({
  text: "",
  setText: () => {},
});

export default TextContext;
