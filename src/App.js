import "./App.css";
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Nav/Navbar";
import "./assets/custom.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ExerciseHome from "./components/Exercise/ExerciseHome.jsx";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/exercise_home" element={<ExerciseHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
