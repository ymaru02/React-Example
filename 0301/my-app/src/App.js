import "./App.css";
import Compositions from "./components/2-4.Props/Compositions";
import Extaction from "./components/2-4.Props/Extraction/Extaction";
import ClassComponent from "./components/2-5.State/ClassComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent />
      <Extaction />
      <Compositions />
    </div>
  );
}

export default App;
