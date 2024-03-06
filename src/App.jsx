import "./App.css";
import NavbarSec from "./components/NavbarSec";
import RunningMarquee from "./components/RunningMarque";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HomeSec from "./pages/HomeSec";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import { useState, useEffect } from "react";
import Preloader from "./components/Preload";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000); 
  }, []);

  return (
    <div className="bg-[#fdfde1]">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <RunningMarquee />
          <NavbarSec />
          <Routes>
            <Route path="/" element={<HomeSec />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Newsletter />
          <Footer />
        </>

      )}
    </div>
  );
}

export default App;
