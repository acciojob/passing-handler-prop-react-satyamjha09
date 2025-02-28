import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const colors = [
  { id: 1, name: "Blue", value: "blue" },
  { id: 2, name: "Orange", value: "orange" },
  { id: 3, name: "Green", value: "green" }
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h1>Handler Prop Demo</h1>
      <ColourSelector colors={colors} onSelectColor={setSelectedColor} />
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {[0, 1, 2].map((index) => (
          <Selection key={index} bgColor={selectedColor} />
        ))}
      </div>
    </div>
  );
};

export default App;
