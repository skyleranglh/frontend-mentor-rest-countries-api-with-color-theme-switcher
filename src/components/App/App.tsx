import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Countries from "../Countries";
import CountryDetail from "../CountryDetail";
import Navbar from "../Navbar";

function App() {
  return (
    <div className="app">
      <Navbar title={"Where in the world?"} />
      <div className="app__body">
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries/:cca3" element={<CountryDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
