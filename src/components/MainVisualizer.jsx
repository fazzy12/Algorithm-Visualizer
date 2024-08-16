import React, { useState } from 'react';
import { bubbleSort } from '../algorithms/sorting/bubbleSort';
import { quickSort } from '../algorithms/sorting/quickSort';
import ControlPanel from './ControlPanel';

function generateRandomArray(size = 50) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 500) + 10);
}

function MainVisualizer() {
  const [array, setArray] = useState(generateRandomArray());
  const [speed, setSpeed] = useState(100); // Speed of visualization
  const [algorithm, setAlgorithm] = useState('Bubble Sort'); // Default algorithm

  const handleSort = () => {
    switch (algorithm) {
      case 'Bubble Sort':
        bubbleSort(array, setArray, speed);
        break;
      case 'Quick Sort':
        quickSort(array, setArray, speed);
        break;
      // Add more cases as you implement more algorithms
      default:
        break;
    }
  };

  return (
    <div>
      <ControlPanel
        setAlgorithm={setAlgorithm}
        handleSort={handleSort}
        setSpeed={setSpeed}
        setArray={setArray}
      />
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            style={{ height: `${value}px` }}
            className="array-bar"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default MainVisualizer;
