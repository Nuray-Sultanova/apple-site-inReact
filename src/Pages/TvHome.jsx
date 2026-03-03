import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const TvHome = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto font-sans antialiased my-12 px-6">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Electronics.{" "}
          <span className="text-slate-400">The future of tech.</span>
        </h2>
      </div>

      {/* Grid Sistemi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden min-h-[500px]"
          >
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-blue-600 uppercase mb-2">
                New Arrival
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="font-semibold text-lg mt-3 text-slate-500">
                From ${item.price}
              </p>
            </div>

            <div className="relative flex justify-center items-center h-64 mt-6">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full object-contain transform transition-transform duration-700 ease-in-out"
              />
            </div>

            <div className="mt-6 flex items-center text-blue-600 font-medium text-sm group/btn">
              <Link>Learn more</Link>
              <svg
                className="ml-1 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvHome;
