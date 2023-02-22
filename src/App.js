import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Corporate from "./Corporate";
import Landing from "./Landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/corporate" element={<Corporate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
