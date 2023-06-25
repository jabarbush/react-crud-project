import React, { useEffect } from "react";
import FontDropdownProps from "../interfaces/FontDropdownProps";

const FontDropdown: React.FC<FontDropdownProps> = ({ selectedUser, options }) => {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setSelectedOption(selectedUser?.signature?.fontStyle || "");
  }, [selectedUser]);

  const hasFontStyle = selectedUser?.signature?.fontStyle;

  return (
    <select className="dropdown" value={hasFontStyle ? selectedUser?.signature?.fontStyle : selectedOption} onChange={handleChange}>
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
