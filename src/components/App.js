import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const colors = [
  { id: 1, name: "Red", value: "red" },
  { id: 2, name: "Green", value: "green" },
  { id: 3, name: "Blue", value: "blue" }
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(""); // Holds the currently selected color
  const [boxColors, setBoxColors] = useState(["", "", ""]); // Holds colors for each box

  // Function to update the color of a specific box
  const handleBoxClick = (index) => {
    if (!selectedColor) return; // If no color is selected, do nothing

    const newBoxColors = [...boxColors];
    newBoxColors[index] = selectedColor;
    setBoxColors(newBoxColors);
  };

  return (
    <div>
      <h1>Handler Prop Demo</h1>
      <ColourSelector colors={colors} onSelectColor={setSelectedColor} />
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {boxColors.map((color, index) => (
          <Selection 
            key={index} 
            bgColor={color} 
            onBoxClick={() => handleBoxClick(index)} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
