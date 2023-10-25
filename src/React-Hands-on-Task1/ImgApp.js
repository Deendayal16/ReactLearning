import { ImageList } from "./ImageList";
import "./style.css";
//don't change anything
export default function ImgApp() {
  const images = [
    { id: "a", name: "Leaf", src: "https://picsum.photos/seed/abd/200/300" },
    { id: "b", name: "House", src: "https://picsum.photos/seed/gqk/200/300" },
    { id: "c", name: "Tree", src: "https://picsum.photos/seed/ias/200/300" }
  ];
  return (
    <div className="App">
      <ImageList images={images} />
    </div>
  );
}
