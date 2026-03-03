import { Link } from "react-router-dom"; // Link-i mütləq import etməlisən
import { Apple, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { name: "Store", path: "/" },
    { name: "Mac", path: "/mac" },
    { name: "iPad", path: "/ipad" },
    { name: "iPhone", path: "/iphone" },
    { name: "Watch", path: "/watch" },
    { name: "AirPods", path: "/airpods" },
    { name: "TV & Home", path: "/tv-home" },
    { name: "Only on Apple", path: "/only-on-apple" },
    { name: "Accessories", path: "/accessories" }, 
    { name: "Support", path: "/support" }
  ];

  return (
    <nav className="w-full bg-[#161617]/95 backdrop-blur-md z-50 fixed top-0 left-0">
      
      <div className="max-w-5xl mx-auto flex items-center justify-between h-11 px-4">
        
        <Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">
          <Apple size={16} color="white" fill="white" />
        </Link>

        {/* Menyu Linkləri */}
        <div className="hidden md:flex items-center justify-between flex-1 max-w-200 px-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[12px] text-[#f5f5f7] opacity-80 hover:opacity-100 transition-opacity font-light tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Sağ tərəf ikonlar */}
        <div className="flex items-center gap-6">
          <button className="opacity-80 hover:opacity-100 transition-opacity">
            <Search size={15} color="white" />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity">
            <ShoppingBag size={15} color="white" />
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;