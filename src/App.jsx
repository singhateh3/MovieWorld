import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import Favorites from "./pages/Favorites";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./components/pagination";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refresMovies = () => {
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <>
      <NavBar onLogoClick={refresMovies} />
      <div className="main bg-gray-900 pt-">
        <Routes>
          <Route path="/" element={<Home refreshKey={refreshKey} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
