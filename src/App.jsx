import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <>
      <NavBar />
      <div className="main bg-gray-900 pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
