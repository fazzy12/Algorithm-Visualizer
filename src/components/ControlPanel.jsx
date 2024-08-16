import React from "react";

function ControlPanel({ setAlgorithm, handleSort, setSpeed, setArray }) {
  return (
    <div className="control-panel">
      <label>Algorithm:</label>
      <select onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="Bubble Sort">Bubble Sort</option>
        <option value="Quick Sort">Quick Sort</option>
        {/* Add more options as needed */}
      </select>

      <label>Speed:</label>
      <input
        type="range"
        min="10"
        max="1000"
        onChange={(e) => setSpeed(e.target.value)}
      />

      <button onClick={() => setArray(generateRandomArray())}>
        Generate New Array
      </button>
      <button onClick={handleSort}>Sort</button>
    </div>
  );
}

export default ControlPanel;
