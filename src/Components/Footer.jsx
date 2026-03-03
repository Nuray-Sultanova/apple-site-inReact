import { Link } from "react-router-dom"; 

const Footer = () => {
  const linkStyle = "block cursor-pointer hover:underline text-[#6e6e73] transition-colors";
  const titleStyle = "font-semibold mb-2 text-[#1d1d1f] text-[12px]";

  return (
    <footer className="w-full bg-[#f5f5f7] pt-8 pb-10 mt-10 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Linklər Grid Bölməsi */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-300 pb-8 text-[12px]">
          
          {/* Sütun 1: Shop and Learn */}
          <div className="space-y-6">
            <div>
              <p className={titleStyle}>Shop and Learn</p>
              <div className="space-y-1.5">
                {["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"].map(item => (
                  <Link key={item} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className={linkStyle}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sütun 2: Services & Account */}
          <div className="space-y-6">
            <div>
              <p className={titleStyle}>Services</p>
              <div className="space-y-1.5">
                {["Apple Music", "Apple TV+", "Apple Fitness+", "Apple Arcade", "iCloud", "Apple One", "Apple Card", "Apple Books", "App Store"].map(item => (
                  <Link key={item} to={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} className={linkStyle}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className={titleStyle}>Account</p>
              <div className="space-y-1.5">
                <Link to="/account/manage" className={linkStyle}>Manage Your Apple ID</Link>
                <Link to="/account/store" className={linkStyle}>Apple Store Account</Link>
                <Link to="/account/icloud" className={linkStyle}>iCloud.com</Link>
              </div>
            </div>
          </div>

          {/* Sütun 3: Apple Store */}
          <div>
            <p className={titleStyle}>Apple Store</p>
            <div className="space-y-1.5">
              {["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Financing", "Apple Trade In", "Order Status", "Shopping Help"].map(item => (
                <Link key={item} to={`/retail/${item.toLowerCase().replace(/\s+/g, '-')}`} className={linkStyle}>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Sütun 4: Business, Education, Healthcare */}
          <div className="space-y-6">
            <div>
              <p className={titleStyle}>For Business</p>
              <Link to="/business" className={linkStyle}>Apple and Business</Link>
            </div>
            <div>
              <p className={titleStyle}>For Education</p>
              <Link to="/education" className={linkStyle}>Apple and Education</Link>
            </div>
            <div>
              <p className={titleStyle}>For Healthcare</p>
              <Link to="/healthcare" className={linkStyle}>Apple in Healthcare</Link>
            </div>
          </div>

          {/* Sütun 5: Apple Values & About */}
          <div className="space-y-6">
            <div>
              <p className={titleStyle}>Apple Values</p>
              <div className="space-y-1.5">
                {["Accessibility", "Environment", "Privacy", "Supplier Responsibility"].map(item => (
                  <Link key={item} to={`/values/${item.toLowerCase()}`} className={linkStyle}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className={titleStyle}>About Apple</p>
              <div className="space-y-1.5">
                {["Newsroom", "Investors", "Ethics & Compliance", "Events", "Contact Apple"].map(item => (
                  <Link key={item} to={`/about/${item.toLowerCase()}`} className={linkStyle}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Alt Hissə: Copyright və Legal Links */}
        <div className="pt-4 text-[12px] text-[#6e6e73]">
          <p className="mb-4">
            More ways to shop:{" "}
            <Link to="/retail" className="text-[#0066cc] hover:underline inline-flex items-center">
              Find an Apple Store <span className="ml-0.5">&gt;</span>
            </Link>{" "}
            or{" "}
            <Link to="/retailers" className="text-[#0066cc] hover:underline inline-flex items-center">
              other retailer <span className="ml-0.5">&gt;</span>
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </p>
          
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-4 gap-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
              <div className="flex gap-3">
                {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((text) => (
                  <Link 
                    key={text} 
                    to={`/legal/${text.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="hover:text-[#1d1d1f] border-r border-gray-300 pr-3 last:border-0"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/choose-your-country" className="hover:text-[#1d1d1f] font-medium">
              United States
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;