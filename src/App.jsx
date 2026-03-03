import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Accessories from "./Pages/Accessories";
import Mac from "./Pages/Mac";
import TvHome from "./Pages/TvHome";

function App() {
  return (
    <div className="antialiased font-sans bg-white">
      <div className="w-full z-50">
        <Navbar />
      </div>
      {/*very important*/}
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/tvhome" element={<TvHome />} />
        </Routes>
      </div>
      <footer className="bg-[#f5f5f7] py-16 mt-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-[12px] text-[#6e6e73] leading-relaxed space-y-4 border-b border-gray-200 pb-10 mb-10">
            <p>
              1. Offer valid on qualifying purchases of eligible Apple products
              from November 25, 2022, to November 28, 2022.
            </p>
            <p>
              Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
              Branch.
            </p>
          </div>
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
