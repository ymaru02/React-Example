// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { useInput } from "./components/useInput";
import { useTabs } from "./components/useTabs";
import { useTitle } from "./components/useTitle";
import { useClick } from "./components/useClick";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.retrunValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };

  return { enablePrevent, disablePrevent };
};

function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  const { currentIndex, changeItem } = useTabs(0, content);

  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);

  const sayHello = () => {
    console.log("Hello");
  };
  useEffect(sayHello, []);

  const titleUpdate = useTitle("Loading...");
  setTimeout(() => titleUpdate("Home"), 5000);

  const title = useClick(sayHello);

  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to seesome magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
      <br />

      <h1>Hello</h1>
      <input placeholder="Name" {...name} />

      <br />
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentIndex.content}</div>

      <br />
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>

      <br />
      <h1 ref={title}>Hi</h1>

      <br />
      <button onClick={enablePrevent}>Prevent</button>
      <button onClick={disablePrevent}>UnPrevent</button>
    </div>
  );
}

export default App;
