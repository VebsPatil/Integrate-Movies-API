import "./css/App.css";
import MovieCard from "./component/MovieCard";
import Home from "./pages/Home";
import HomePage from "./pages/Home";
import Favroite from "./pages/Favroite";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/navBar";

function App() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
      <main className="newmain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favrouite" element={<Favroite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
