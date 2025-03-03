import React, { useState } from "react";
import ColourSelector from "./ColourSelector";
import Selection from "./Selection";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <h1>Color Selector</h1>
      <ColourSelector setSelectedColor={setSelectedColor} />
      <Selection selectedColor={selectedColor} />
    </div>
  );
};

export default App;
