import "./App.css";
import RightSide from "./components/RightSideComponent/RightSide";
import Sidebar from "./components/Sidebar/Sidebar";
import MainDash from "./components/MainDash/MainDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </Router>
          {/* <Sidebar />
        <MainDash />
        <RightSide /> */}
        </div>
      </div>
    </>
  );
}

export default App;
