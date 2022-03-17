import React, { useState } from "react";

export default function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}> Open </button>
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          <h1>{props.title}</h1>
          <h5>{props.description}</h5>
        </div>
      )}
    </>
  );
}
