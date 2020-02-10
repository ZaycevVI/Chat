import React from "react";
import "./style.scss";

function TypingBlock({ name }) {
  return (
    <div className="typing">
      {name} is typing
      <span className="typing-animation"></span>
    </div>
  );
}

export default TypingBlock;
