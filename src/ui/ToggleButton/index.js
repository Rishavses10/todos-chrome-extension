import React from "react";
import { useState } from "react";
import './toggleButton.css';

const ToggleButton = (props) => {

  const { onChangeCallback } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    onChangeCallback(!checked);
    setChecked(!checked);
  }

  return (
    <>
      <label className="toggle-switch">
        <input type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="slider"></span>
      </label>
    </>
  );
}

export default ToggleButton;