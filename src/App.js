import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Toolbar from "./components/Toolbar";
import Content from "./components/Content";
function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["Green", "Orange", "Red", "Blue", "Violet"];
  const handleSelection = (e) => {
    console.log("inside handleSelection:", e.currentTarget.value);
    setSelectedColor(e.currentTarget.value);
  };
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

export default App;
