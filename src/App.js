import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Menu from "./pages/Menu";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  //get info on the current location of the page based on the navlink
  const location = useLocation();

  useEffect(() => {
    //extract route from location.pathname
    const routeName = location.pathname.replace("/", "");

     //dynamically change title based on route name
    document.title = routeName || "Luigis";
  }, [location.pathname]);


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
      <Footer/>
    </>
  );
}

export default App;
