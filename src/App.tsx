import "./styles.css";
import cat1 from "./assets/cat1.png";
import cat2 from "./assets/cat2.png";
import cat3 from "./assets/cat3.png";
import cat4 from "./assets/cat4.png";
import { useState, useEffect } from "react";
import { VeryHeavyComponentNoProps } from "./heavy-component";

const images = [cat1, cat2, cat3, cat4];

const getImageWidth = (windowWidth: number) => {
  if (windowWidth > 1280) return 500;
  if (windowWidth > 1024) return 300;
  return 200;
};

const getLayoutWidth = (windowWidth: number) => {
  if (windowWidth > 1280) return 1200;
  if (windowWidth > 1024) return 1000;
  return 500;
};

export default function App() {
  const [value, setValue] = useState("");
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

  return (
    <div style={{ width: getLayoutWidth(width) }}>
      <input
        type="text"
        key={value}
        className="input"
        onChange={(e) => setValue(e.target.value || "")}
        style={{ width: getLayoutWidth(width) }}
      />
      <div className="cats">
        {images.map((url) => (
          <img
            src={url}
            key={`${url}--${value}`}
            style={{ width: `${getImageWidth(width)}px` }}
            alt="kitten in a hat"
          />
        ))}
      </div>
      <VeryHeavyComponentNoProps />
    </div>
  );
}
