import React from "react";

const Selection = ({ bgColor, onBoxClick }) => {
  return (
    <div
      className="fix-box"
      data-testid="selection-box"
      onClick={onBoxClick}
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        backgroundColor: bgColor,
        cursor: "pointer",
      }}
    >
      Selection
    </div>
  );
};

export default Selection;
