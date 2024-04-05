import { useState, useEffect, lazy } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import NavbarSec from "./components/NavbarSec";
import RunningMarquee from "./components/RunningMarque";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
const HomeSec = lazy(() => import("./pages/HomeSec"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Shop = lazy(() => import("./pages/Shop"));
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
    <div id="root" className="bg-[#fdfde1]">
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
