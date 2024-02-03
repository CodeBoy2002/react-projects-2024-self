import React, { useState } from "react";

const CountSteps = () => {
  const [count, setCount] = useState(0);
  const [specificCount, setSpecificCount] = useState(1);

  const handleMinus = () => {
    setCount((count) => {
        if(count == 0) {
            return 0
        }
        return count - 1
    })
  };

  const handlePlus = () => {
    setCount((count) => {
        if(!checkValidSteps(count)) {
            return count
        }
        return count + 1
    })
  };

    const checkValidSteps = (count) => {
        if(count < specificCount) {
            return true
        }
        return false
    }

  return (
    <div>
      <h2>Count Steps</h2>
      <div>
        <h3>Enter Count To Reach</h3>
        <input
          type="number"
          placeholder="Enter Count"
          value={specificCount}
          onChange={(e) => setSpecificCount(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", margin: "2rem", gap: "2rem" }}>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={handleMinus}
        >
          -
        </button>
        <h4>{count}</h4>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handlePlus}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CountSteps;
