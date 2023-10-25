import { useState } from "react";
import {Input}  from "./Input";

 const InputApp= ()=> {
  const [colors, setColors] = useState([]);

  const addColor = (newColor) => {
    let newclr = [...colors, newColor];
    setColors(newclr);
  };
  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });
  return (
    <div>
      <Input onSubmit={addColor} />
      <ul>{renderedColors}</ul>
    </div>
  );
}
export default  InputApp;
