import cat1 from "./assets/cat1.png";
import cat2 from "./assets/cat2.png";
import cat3 from "./assets/cat3.png";
import cat4 from "./assets/cat4.png";
const images = [cat1, cat2, cat3, cat4];
const getImageWidth = (windowWidth: number) => {
  if (windowWidth > 1280) return 500;
  if (windowWidth > 1024) return 300;
  return 200;
};

const ImgsContainer = (props: { width: number }) => {
  console.log(
    "🚀 ~ file: ImgsContainer.tsx:13 ~ ImgsContainer ~ props:",
    props
  );
  return (
    <div className="cats">
      {images.map((url) => (
        <img
          src={url}
          key={`${url}`} // make key stable to avoid rerenders
          style={{ width: `${getImageWidth(props.width)}px` }}
          alt="kitten in a hat"
        />
      ))}
    </div>
  );
};

export default ImgsContainer;
