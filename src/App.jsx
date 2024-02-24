import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import MenuPage from "./pages/MenuPage";
import TentangKami from "./pages/TentangKami";
import HubungiKami from "./pages/HubungiKami";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // AOS options
      duration: 1000,
      mirror: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
