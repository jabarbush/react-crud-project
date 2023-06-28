import React, { useEffect, useState } from "react";
import FontDropdownProps from "../interfaces/FontDropdownProps";

const FontDropdown: React.FC<FontDropdownProps> = ({ selectedUser, options, onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedUser && selectedUser.signature) {
      setSelectedOption(selectedUser.signature.fontStyle || "");
    } else {
      setSelectedOption("");
    }
  }, [selectedUser]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFontStyle = event.target.value;
    setSelectedOption(selectedFontStyle);
    onOptionChange(selectedFontStyle);
  };
  
  return (
    <select className="dropdown" value={selectedOption} onChange={handleChange} required>
      <option disabled value="">
        Select font...
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default FontDropdown;
