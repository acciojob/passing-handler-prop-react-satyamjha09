import React from "react";

const ColourSelector = ({ setSelectedColor }) => {
  const colors = ["blue", "orange", "green"];

  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          data-testid={color} // Cypress test expects this
          onClick={() => setSelectedColor(color)}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: color,
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
