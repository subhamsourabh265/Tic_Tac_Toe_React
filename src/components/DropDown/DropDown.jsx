import { useState } from "react";
import "./DropDown.css";

export default function Dropdown({ selectMatch, noOfWins }) {
  const values = ["Kitna Match Khelna Hai", 5, 10, 15, 20];

  const [value, setValue] = useState(values[0]);

  const handleChange = (event) => {
    setValue(event.target.value);
    selectMatch(event.target.value === values[0] ? 0 : event.target.value);
  };

  return (
    <div className="dropdown">
      <select value={value} onChange={handleChange} className="dropdown-select">
        {values.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </div>
  );
}
