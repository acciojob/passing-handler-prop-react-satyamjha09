import React, { useEffect, useState } from "react";

const Selection = ({ selectedColor }) => {
  const [boxColor, setBoxColor] = useState("");

  useEffect(() => {
    setBoxColor(selectedColor);
  }, [selectedColor]);

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <div
        className="fix-box"
        data-testid="selection-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
          border: "1px solid black",
        }}
      ></div>
      <div
        className="fix-box"
        data-testid="selection-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
          border: "1px solid black",
        }}
      ></div>
      <div
        className="fix-box"
        data-testid="selection-box"
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
          border: "1px solid black",
        }}
      ></div>
    </div>
  );
};

export default Selection;
