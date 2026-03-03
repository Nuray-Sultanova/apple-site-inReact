const Hero = () => {
  return (
    <section className="relative w-full h-125 my-2 px-8">
      {/*scroll bar gizletmek*/}
      <div className="flex gap-20 overflow-x-scroll h-full snap-x snap-mandatory scroll-smooth 
                      [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

        <img src="/Tvplus_img1.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img2.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img3.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img4.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img5.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img6.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img7.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img8.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img9.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img10.jpg" className="w-full h-full object-cover snap-center shrink-0" />
        <img src="/Tvplus_img11.jpg" className="w-full h-full object-cover snap-center shrink-0" />

      </div>

      <div className="absolute bottom-10 left-10 text-white flex gap-10">
        <button className="bg-white text-black font-bold px-4 py-2 rounded-full text-sm cursor-pointer transition-colors hover:bg-black hover:text-white">
          Stream now
        </button>
        <p className="mt-2 text-sm font-medium">
          Comedy · Start your holidays on a high note.
        </p>
      </div>

    </section>
  );
};

export default Hero;