import "./App.css";
import RightSide from "./components/RightSideComponent/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
