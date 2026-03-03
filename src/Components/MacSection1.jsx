const MacSection1 = () => {
  const products = [
    {
      id: 1,
      etiket: "iPhone 14",
      header: "Big and Bigger",
      text: "or $33.29/mo. for 24 mo. before trade‑in",
      src: "/iphone14_2.png",
    },
    {
      id: 2,
      etiket: "AirPods",
      header: "Strikingly thin.",
      text: "From $999 or $83.25/mo. for 12 mo.",
      src: "/airpods.png",
    },
    {
      id: 3,
      etiket: "Iphone14 case",
      header: "A healthy leap ahead.",
      text: "From $399 or $16.62/mo. for 24 mo.",
      src: "/case2.png",
    },
  ];

  return (
    <div>
      <div className="px-6 py-12">
        {/* Başlıq */}
        <p className="text-3xl md:text-5xl tracking-tight mb-12">
          <span className="font-semibold text-slate-900">The latest.</span>{" "}
          <span className="text-slate-400 font-semibold">
            Take a look at what’s new, right now.
          </span>
        </p>

        {/* Məhsul Grid-i */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden min-h-125"
            >
              {/* Mətn Hissəsi */}
              <div className="z-10">
                <p className="text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase">
                  {item.etiket}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.header}
                </h3>

                <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed max-w-55">
                  {item.text}
                </p>
              </div>

              <div className="relative mt-8 flex justify-center items-center">
                <img
                  src={item.src}
                  alt={item.header}
                  className="w-full h-64 object-contain transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MacSection1;
