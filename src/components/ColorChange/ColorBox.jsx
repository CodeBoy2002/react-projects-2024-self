import React, { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState("purple");

  const handleChange = (e) => {
    setColor(e.target.value)
  };

  return (
    <div>
      <h3>COLOR THE BOX</h3>

      <textarea style={{ padding: "5rem", backgroundColor: color }}></textarea>

      <div style={{ marginTop: "2rem" }}>
        <input
          type="text"
          placeholder="Enter Color"
          name="color"
          value={color}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ColorBox;
