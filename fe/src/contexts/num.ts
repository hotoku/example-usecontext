import { createContext } from "react";

type NumContext = {
  num: number;
  setNum: (num: number) => void;
};

const NumContext = createContext<NumContext>({
  num: 0,
  setNum: () => {},
});

export default NumContext;
