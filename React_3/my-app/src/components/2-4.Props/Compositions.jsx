import React from "react";

function Welcome(props) {
  return <h1> Hello, {props.name}</h1>;
}

export default function Compositions() {
  return (
    <div>
      <Welcome name="Jimmy" />
      <Welcome name="don" />
      <Welcome name="yun" />
    </div>
  );
}
