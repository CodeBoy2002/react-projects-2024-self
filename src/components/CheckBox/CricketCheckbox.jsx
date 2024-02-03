import React, { useState } from "react";

const CricketCheckbox = () => {
  const arr = ["play cricket", "play video games", "read box"];

  const [items, setItems] = useState(arr);
  const [checked, setChecked] = useState(Array(arr.length).fill(false));

  const handleRemove = (index) => {
    const updatedList = [...items];
    updatedList.splice(index, 1);
    setItems(updatedList);

    //RESET THE CHECK WHEN BEING REMOVED
    const updatedChecked = [...checked];
    updatedChecked.splice(index, 1);
    setChecked[updatedChecked];
  };

  const handleChecked = (index) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);
  };

  return (
    <div>
      <h2>Check box</h2>
      {items.map((item, index) => (
        <div style={{ display: "flex", gap: "5rem", margin: "20px" }}>
          <input
            type="checkbox"
            checked={checked[index]}
            onChange={() => handleChecked(index)}
          />
          {item}
          {checked[index] && (
            <button onClick={() => handleRemove(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default CricketCheckbox;
