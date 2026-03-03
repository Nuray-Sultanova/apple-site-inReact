import React from "react";
import MacAnimasiya from "../Components/MacAnimasiya";
import MacSection1 from "../Components/MacSection1";
import MacSection2 from "../Components/MacSection2";

const Mac = () => {
  return (
    <div className="max-w-6xl mx-auto font-sans antialiased ">
      {/* Üst Banner */}
      <div className="max-w-4xl mx-auto py-5 text-center">
        <p className="text-[11px] md:text-xs text-slate-500 font-medium tracking-tight uppercase">
          The Apple Shopping Event is coming. Nov 25-28.
        </p>
      </div>

      <MacAnimasiya />
      <MacSection1 />
      <MacSection2/>
    </div>
  );
};

export default Mac;
