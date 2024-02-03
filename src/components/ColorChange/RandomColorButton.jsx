import React, { useState } from "react";

const RandomColorButton = () => {
  const [buttons, setButtons] = useState(Array(10).fill("#000000"));

  const generateRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  const handleRandom = (btnId) => {
    setButtons((prevButton) => {
      const newColor = [...prevButton];
      newColor[btnId] = generateRandomColor();
      return newColor;
    });
  };
  return (
    <div>
      <h3>Generate Random Button Colors</h3>
      {buttons.map((buttonColor, index) => (
        <button
          key={index}
          style={{ backgroundColor: buttonColor, color: "white", margin: '10px' }}
          onMouseEnter={() => handleRandom(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default RandomColorButton;
