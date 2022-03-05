import "./App.css";
// import Condition from "./components/2-8.ConditionalRendering/Condition";
// import Compositions from "./components/2-4.Props/Compositions";
// import Extaction from "./components/2-4.Props/Extraction/Extaction";
// import ClassComponent from "./components/2-5.State/ClassComponent";
// import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
// import Compositions2 from "./components/2-6.LifeCycle/ClassComponent";
// import Event from "./components/2-7.Event/Event";
// import List from "./components/2-9.List/List";
import ControlledComponent from "./components/2-10.Form/ControlledComponent";
import UncontrolledComponent from "./components/2-10.Form/UncontrolledComponent";

function App() {
  return (
    <div className="App">
      <UncontrolledComponent />
      <ControlledComponent />
      {/* <List /> */}
      {/* <Condition /> */}
      {/* <Event /> */}
      {/* <Compositions2 /> */}
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extaction />
      <Compositions /> */}
    </div>
  );
}

export default App;
