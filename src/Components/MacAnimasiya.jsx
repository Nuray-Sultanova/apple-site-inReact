import React from "react";

const MacAnimasiya = () => {
  return (
    <div>
      <section className="max-w-5xl mx-auto py-32 px-10">
        <style>{`
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-reveal {
      animation: fadeInUp 0.8s ease-out forwards;
      opacity: 0;
    }
  `}</style>

        <div className="flex flex-col items-start gap-2">
          {/* 1. Kiçik Başlıq  */}
          <p
            className="animate-reveal text-[12px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-2"
            style={{ animationDelay: "0.1s" }}
          >
            Evolution of Power
          </p>

          {/* 2. Əsas MAC yazısı  */}
          <h1
            className="animate-reveal text-8xl md:text-9xl font-extrabold tracking-tighter text-slate-900"
            style={{ animationDelay: "0.3s" }}
          >
            Mac<span className="text-blue-600">.</span>
          </h1>

          {/* 3. Alt mətn */}
          <div
            className="animate-reveal mt-8 max-w-lg"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight italic-none">
              Welcome to the Mac experience.
            </p>
            <p className="mt-4 text-lg text-gray-500 font-light leading-relaxed border-l-2 border-blue-600 pl-4">
              Everything is faster, sleeker, and more powerful than ever.
              Designed for the bold.
            </p>
          </div>

          {/* 4. Altındakı dekorativ xətt */}
          <div
            className="animate-reveal mt-12 h-0.5 w-24 bg-linear-to-r from-blue-600 to-transparent rounded-full"
            style={{ animationDelay: "0.8s" }}
          ></div>
        </div>
      </section>
    </div>
  );
};

export default MacAnimasiya;
