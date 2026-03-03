import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Accessories from "./Pages/Accessories";

function App() {
  return (
    <div className="antialiased font-sans bg-white">
      {/* Navbar həmişə başda durur */}
      <div className="w-full z-50">
        <Navbar />
      </div>

      {/* Səhifə dəyişəndə yalnız bura dəyişir */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>

      {/* Footer həmişə sonda durur */}
      <footer className="bg-[#f5f5f7] py-16 mt-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-[12px] text-[#6e6e73] leading-relaxed space-y-4 border-b border-gray-200 pb-10 mb-10">
            <p>1. Offer valid on qualifying purchases of eligible Apple products from November 25, 2022, to November 28, 2022.</p>
            <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
          </div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;