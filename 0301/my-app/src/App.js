import "./App.css";
import Compositions from "./components/2-4.Props/Compositions";
import Extaction from "./components/2-4.Props/Extraction/Extaction";
import ClassComponent from "./components/2-5.State/ClassComponent";
import FunctionalComponent from "./components/2-5.State/FunctionalComponent";
import Compositions2 from "./components/2-6.LifeCycle/ClassComponent";

function App() {
  return (
    <div className="App">
      <Compositions2 />
      {/* <FunctionalComponent />
      <ClassComponent />
      <Extaction />
      <Compositions /> */}
    </div>
  );
}

export default App;
