import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Navbar from "./Components/Navbar";
import "./App.css"

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/menu" element={<Menu />} ></Route>
          <Route path="/reviews" element={<Reviews />} ></Route>
        </Routes>
      </div>

    </>
  );
}

export default App;
