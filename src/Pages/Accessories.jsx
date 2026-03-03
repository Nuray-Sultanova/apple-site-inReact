import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";

const Accessories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "Mac", icon: "💻" },
    { name: "iPad", icon: "📱" },
    { name: "iPhone", icon: "🤳" },
    { name: "Watch", icon: "⌚" },
    { name: "TV & Home", icon: "📺" },
  ];

  return (
    <div className="bg-white min-h-screen antialiased pt-">
      {/* 1. Üst Başlıq */}
      <div className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-[#1d1d1f]">Accessories</h1>
          <Link to="/all" className="text-[#0066cc] text-sm hover:underline flex items-center">
            Browse all <span className="ml-1 text-[10px] tracking-widest">•••</span>
          </Link>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="flex flex-col md:flex-row h-auto md:h-125 lg:h-150 bg-[#f5f5f7] overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end px-10 py-16 md:py-0">
          <div className="max-w-100 w-full">
            <h2 className="text-[48px] md:text-[56px] font-semibold text-[#1d1d1f] leading-[1.05] tracking-tight">
              Mix. Match.<br />MagSafe.
            </h2>
            <p className="text-[19px] md:text-[21px] text-[#1d1d1f] mt-5 leading-snug">
              Snap on a case, wallet, wireless charger, or battery pack.
            </p>
            <Link to="/shop/magsafe" className="text-[#0066cc] text-[19px] mt-6 inline-flex items-center hover:underline underline-offset-4">
              Shop MagSafe <ChevronRight size={20} className="ml-1" />
            </Link>
          </div>
        </div>
        <div 
          className="w-full md:w-1/2 h-87.5 md:h-full bg-no-repeat"
          style={{ 
            backgroundImage: "url('/magsafe-hero.png')",
            backgroundSize: "cover", 
            backgroundPosition: "center left"
          }}
        />
      </section>

      {/* 3. Axtarış Bölməsi */}
      <section className="py-20 text-center bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] mb-10 tracking-tight">
            Find the accessories you’re looking for.
          </h3>
          <div className="relative max-w-160 mx-auto mb-16">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#86868b]">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search accessories"
              className="w-full h-14 pl-14 pr-12 bg-[#f5f5f7] border-none rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {products.map((cat) => (
              <Link key={cat.name} to={`/shop/${cat.name.toLowerCase()}`} className="group flex flex-col items-center">
                <div className="w-20 h-20 md:w-37.5 md:h-37.5 rounded-full border border-[#d2d2d7] flex items-center justify-center bg-white hover:shadow-xl transition-all mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                </div>
                <span className="text-[17px] font-normal text-[#1d1d1f]">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Holiday Gifts */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">Holiday Gifts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GiftCard img="/airpods.png" name="AirPods (3rd generation)" price="$169.00" badge="Free Engraving" />
            <GiftCard img="/pen.png" name="Apple Pencil (2nd generation)" price="$129.00" badge="Free Engraving" />
            <GiftCard img="/battery.png" name="MagSafe Battery Pack" price="$99.00" />
          </div>
          <Link to="/gifts" className="text-[#0066cc] mt-12 inline-flex items-center hover:underline">Shop holiday gifts <ChevronRight size={18} /></Link>
        </div>
      </section>

      {/* 5. Give WOW Banner */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#00000c] rounded-[30px] overflow-hidden py-24 text-white text-center flex flex-col items-center relative">
          <h2 className="text-[48px] md:text-[64px] font-semibold mb-4 z-10">Give WOW.</h2>
          <Link to="/guide" className="text-blue-400 text-[19px] hover:underline flex items-center z-10">Shop the Holiday Gift Guide <ChevronRight size={18} /></Link>
          <div className="absolute inset-0 opacity-40 bgbg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]] from-blue-900 to-transparent"></div>
        </div>
      </section>

      {/* 6. Featured iPhone Accessories */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">Featured iPhone Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GiftCard img="/case.png" name="iPhone 14 Silicone Case" price="$49.00" bgGray />
            <GiftCard img="/charger.png" name="MagSafe Charger" price="$39.00" bgGray />
            <GiftCard img="/case2.png" name="iPhone 14 Pro Max Leather Case" price="$59.00" bgGray />
          </div>
        </div>
      </section>

      {/* 7. iPad Accessories */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">Featured iPad Accessories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GiftCard img="/magic-keyboard.png" name="Magic Keyboard Folio" price="$249.00" bgGray />
            <GiftCard img="/pen.png" name="Apple Pencil (1st generation)" price="$99.00" bgGray />
            <GiftCard img="/magic-keyboard2.png" name="Magic Keyboard for iPad Pro" price="$349.00" bgGray />
          </div>
        </div>
      </section>

      {/* 8. Apple Watch Bands */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">Apple Watch Bands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GiftCard img="/sportband.png" name="Starlight Sport Band" price="$49.00" whiteCard />
            <GiftCard img="/sololoop.png" name="Elderberry Sport Loop" price="$49.00" whiteCard />
            <GiftCard img="/sportloop.png" name="Rainforest Braided Solo Loop" price="$99.00" whiteCard />
          </div>
        </div>
      </section>

      {/* 9. AirTag */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold mb-12">AirTag</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GiftCard img="/airtag.png" name="AirTag" price="$29.00" badge="Free Engraving" bgGray />
            <GiftCard img="/airtag.png" name="AirTag 4 pack" price="$99.00" badge="Free Engraving" bgGray />
            <GiftCard img="/airtagleather.png" name="AirTag Leather Key Ring" price="$35.00" bgGray />
          </div>
        </div>
      </section>
    </div>
  );
};

const GiftCard = ({ img, name, price, badge, bgGray, whiteCard }) => (
  <div className={`${bgGray ? 'bg-[#f5f5f7]' : whiteCard ? 'bg-white' : 'bg-white'} rounded-[28px] p-10 flex flex-col items-center group transition-all hover:shadow-sm`}>
    <div className="h-48 w-full flex items-center justify-center mb-8">
      <img src={img} alt={name} className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
    </div>
    {badge && <span className="text-[#f56300] text-[12px] font-semibold mb-2">{badge}</span>}
    <h3 className="font-semibold text-[17px] text-[#1d1d1f] mb-1">{name}</h3>
    <p className="text-[14px] text-gray-600">{price}</p>
  </div>
);

export default Accessories;