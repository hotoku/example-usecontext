import { useContext } from "react";
import TextContext from "../contexts/text";
import NumContext from "../contexts/num";

function Panel1(): JSX.Element {
  const { text, setText } = useContext(TextContext);
  const { num } = useContext(NumContext);

  return (
    <div style={{ background: "#ccc", padding: 10 }}>
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>{num}</div>
    </div>
  );
}

export default Panel1;
