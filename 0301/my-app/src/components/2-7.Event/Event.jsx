import React from "react";

export default function Event() {
  const handleButtonClick = (event) => {
    // console.dir(event);
    console.log("handleButtonClick");
  };

  const handleMouseLeave = (event) => {
    console.dir(event);
  };

  const handleButtonClickCapture = () => {
    console.log("handleButtonClickCapture");
  };

  const handleButtonClickCapture2 = () => {
    console.log("handleButtonClickCapture2");
  };

  const handleButtonClickBubble = () => {
    console.log("handleButtonClickBubble");
  };
  return (
    <div onClickCapture={handleButtonClickCapture}>
      <div
        onClickCapture={handleButtonClickCapture2}
        onClick={handleButtonClickBubble}
      >
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          Button
        </button>
      </div>
    </div>
  );
}
