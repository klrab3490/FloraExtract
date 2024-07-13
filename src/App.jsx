import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NavbarSec from "./components/NavbarSec";
import RunningMarquee from "./components/RunningMarque";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import HomeSec from "./pages/HomeSec";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Brochure from "./pages/Brochure";
import Preloader from "./components/Preload";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.key]);

  return (
    <div id="root" className="bg-[#fff]">
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
            <Route path="/brochure" element={<Brochure />} />
            {/* Callback route for not found paths */}
            <Route
              path="/*"
              element={
                <NotFound
                  onNotFound={() => {
                    navigate("/", { replace: true });
                  }}
                />
              }
            />
          </Routes>
          <Newsletter />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
