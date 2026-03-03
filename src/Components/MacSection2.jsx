import React from "react";

const MacSection2 = () => {
  const products = [
    {
      id: 1,
      etiket: "APPLE SHOPPING EVENT",
      header: "Get an Apple Gift Card with an eligible product.**",
      text: "November 25 to 28..",
      src: "/macsection2_2.png",
    },
    {
      id: 2,
      etiket: "HOLIDAY GIFT GUIDE",
      header: "Give WOW.",
      text: "Find the perfect gift for everyone on your list.",
      src: "/macsection2_1.png",
    },
    {
      id: 3,
      etiket: "APPLE SPECIALIST",
      header: "Shop one on one with a Specialist. Online or in store.",
      src: "/macsection2_3.png",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl px-4 mx-auto py-16 md:py-24 font-sans antialiased ">
        {/* Başlıq */}
        <p className="text-4xl md:text-6xl tracking-tight mb-16 leading-tight">
          <span className="font-semibold text-slate-900">
            The holidays are here.
          </span>
          <span className="text-slate-400 font-semibold italic-none">
            And so is the best way to shop.
          </span>
        </p>

        {/* Məhsul Grid-i */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-[2.5rem] overflow-hidden min-h-125 flex flex-col justify-end p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-out cursor-pointer ${
                item.src
                  ? "text-white"
                  : "bg-white text-slate-900 border border-slate-100"
              }`}
              style={
                item.src
                  ? {
                      backgroundImage: `url(${item.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}
              }
            >
              {item.src && (
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/30 transition-colors duration-700 z-10"></div>
              )}

              {/* Mətn Hissəsi - Şəklin üzərinə z-index ilə çıxarılır */}
              <div className={`relative z-10 ${item.src ? "max-w-xs" : ""}`}>
                <p
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase antialiased ${item.src ? "text-white/70" : "text-slate-400"}`}
                >
                  {item.etiket}
                </p>

                <h3
                  className={`text-3xl md:text-4xl font-bold mt-3 leading-snug tracking-tighter ${item.src ? "text-white" : "text-slate-900 group-hover:text-blue-600"} transition-colors duration-300`}
                >
                  {item.header}
                </h3>

                <p
                  className={`text-[15px] mt-4 font-medium leading-relaxed max-w-65 ${item.src ? "text-white/80" : "text-slate-500"}`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacSection2;
