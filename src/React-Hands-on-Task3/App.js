import "./style.css";
import Textcolor from "./TextColour";
const  TextColourApp = ()=> {
  return (
    <div className="App">
      <Textcolor color={'red'}  />
      <Textcolor color={'green'} />
      <Textcolor color={'blue'} />
    </div>
  );
}
export default TextColourApp