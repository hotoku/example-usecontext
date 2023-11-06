import { useContext } from "react";
import TextContext from "../contexts/text";
import NumContext from "../contexts/num";

function Panel2(): JSX.Element {
  const { text } = useContext(TextContext);
  const { num, setNum } = useContext(NumContext);

  return (
    <div style={{ background: "#ccc", padding: 10, marginTop: 10 }}>
      <div style={{ minHeight: "1lh" }}>{text}</div>
      <div>
        <input
          type="number"
          value={num}
          onChange={(e) => {
            setNum(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
}

export default Panel2;
