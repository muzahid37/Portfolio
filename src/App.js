import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components.js/Pages.js/Home/Home";
import Sideber from "./Components.js/Pages.js/ShearedPages/Sideber";

function App() {
  return (
    <div className="flex">
      <Sideber></Sideber>
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
