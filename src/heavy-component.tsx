import React from "react";

const wait = (ms: number) => {
  const start = Date.now();
  let now = start;
  while (now - start < ms) now = Date.now();
};

export const VeryHeavyComponentNoProps = () => {
  wait(1000);
  console.log("heavy");
  return <></>;
};
