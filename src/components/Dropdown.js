import { useRef, useEffect } from "react";
import "./Dropdown.scss";
const Dropdown = ({ options, onOptionChange, onFirstLoad }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    console.log("inside useEffect:", dropdownRef.current.value);
    onFirstLoad(dropdownRef.current.value);
  }, [onFirstLoad]);
  return (
    <div className="drop">
      <label htmlFor="listbox1">Select:</label>
      <select id="listbox1" onChange={onOptionChange} ref={dropdownRef}>
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
