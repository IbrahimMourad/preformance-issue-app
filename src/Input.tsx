import { useState } from "react";
import { getLayoutWidth } from "./Wrapper";

const Input = (props: { width: number }) => {
  const [value, setValue] = useState("");
  console.log("🚀 ~ file: Input.tsx:6 ~ Input ~ value:", value);

  return (
    <input
      type="text"
      key={"searchInput"}
      className="input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{ width: getLayoutWidth(props.width) }}
    />
  );
};

export default Input;
