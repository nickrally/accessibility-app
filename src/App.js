import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Title from "./components/Title";
function App() {
  const [selectedColor, setSelectedColor] = useState("");
  const colors = ["Green", "Orange", "Red", "Blue", "Violet"];
  const handleSelection = (e) => {
    console.log("inside handleSelection:", e.currentTarget.value);
    setSelectedColor(e.currentTarget.value);
  };
  return (
    <div className="App">
      <Title />
      <Dropdown
        options={colors}
        onOptionChange={handleSelection}
        onFirstLoad={setSelectedColor}
      />
      <h4>Currently selected: {selectedColor}</h4>
    </div>
  );
}

export default App;
