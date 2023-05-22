import ImgsContainer from "./ImgsContainer";
import Input from "./Input";

import { useState, useEffect } from "react";

export const getLayoutWidth = (windowWidth: number) => {
  if (windowWidth > 1280) return 1200;
  if (windowWidth > 1024) return 1000;
  return 500;
};

const Layout = () => {
  const [width, setWidth] = useState(window.innerWidth);
  console.log("🚀 ~ file: Layout.tsx:14 ~ Layout ~ width:", width);

  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  return (
    <div style={{ width: getLayoutWidth(width) }}>
      <Input width={width} />
      <ImgsContainer width={width} />
    </div>
  );
};
export default Layout;
