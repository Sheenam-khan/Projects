import React, { useState } from 'react';
import Select from 'react-select';


const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Extract keys from the person object
const keys = Object.keys(person);

function PersonSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
const [openMenu, setOpenMenu] = useState(false)
  const handleSelectChange = (selected) => {
    setSelectedOption(selected);
  };

  const options = keys.map((key) => ({
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1) // Capitalize the key
  }));
 const handleInputChange = (query, { action }) => {
    if (action === "input-change") {
        setOpenMenu(true)
    }
}
const hideMenu = () => {
    setOpenMenu(false)
};
  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        // onChange={handleSelectChange}
        openOnFocus={false}
       openOnClick={false}
       defaultOpen={false}
       menuIsOpen={openMenu}
        placeholder="Type 'person' to see keys..."
        onInputChange={handleInputChange}
    onChange={hideMenu}
    onBlur={hideMenu}
      />
    </div>
  );
}

export default PersonSelect;
