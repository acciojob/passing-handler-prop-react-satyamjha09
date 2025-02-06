
import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
    
  const [style, setStyle] = useState({ background: "" });

  return (
    <div className="fix-box" style={style} onClick={() => applyColor(setStyle)}>
      Click to Change Color
    </div>
  );
};

export default Selection;
