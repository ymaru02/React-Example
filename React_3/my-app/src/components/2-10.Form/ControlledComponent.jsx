import React, { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("");
  const [flavor, setFlavor] = useState("");

  function handleChange(event) {
    const name = event.target.name;

    if (name === "name") {
      setName(event.target.value);
    } else if (name === "essay") {
      setName(event.target.value);
    } else if (name === "flavor") {
      setName(event.target.value);
    }
    // setName(event.target.value);
  }

  // function handlEessayChange(event) {
  //   setEssay(event.target.value);
  // }

  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }

  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor : ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>

      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
