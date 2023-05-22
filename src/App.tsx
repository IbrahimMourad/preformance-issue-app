import "./styles.css";

import { VeryHeavyComponentNoProps } from "./heavy-component";
import Layout from "./Layout";

export default function App() {
  console.log("🚀 ~ file: App.tsx:7 ~ App ~ App:");
  return (
    <>
      <VeryHeavyComponentNoProps />
      <Layout />
    </>
  );
}
