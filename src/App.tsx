import "./styles.css";
import { useState, useEffect } from "react";
import ImgsContainer from "./ImgsContainer";
import Input from "./Input";

import { VeryHeavyComponentNoProps } from "./heavy-component";
import Layout from "./Layout";
export const getLayoutWidth = (windowWidth: number) => {
  if (windowWidth > 1280) return 1200;
  if (windowWidth > 1024) return 1000;
  return 500;
};
export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const listener = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ App:");
  return (
    <div style={{ width: getLayoutWidth(width) }}>
      <Layout>
        <Input width={width} />
        <ImgsContainer width={width} />
      </Layout>
      <VeryHeavyComponentNoProps />
    </div>
  );
}
