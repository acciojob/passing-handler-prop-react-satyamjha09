import React from "react";

const ColourSelector = ({ colors, onSelectColor }) => {
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color.id}
          data-testid={color}
          style={{
            margin: "5px",
            padding: "10px",
            backgroundColor: color.value,
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => onSelectColor(color.value)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
};

export default ColourSelector;
