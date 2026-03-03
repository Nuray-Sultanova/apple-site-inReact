const Images = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="relative">
        <img src="/image1.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-500}">
          <h2 className="text-3xl font-bold text-white">iPhone 14 Pro</h2>
          <p className="text-xl text-white">Pro. Beyond.</p>
          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/img2.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-500}">
          <h2 className="text-3xl font-bold text-black">iPad</h2>
          <p className="text-xl text-black">Lovable. Drawable. Magical.</p>
          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/img3.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-500}">
          <img className="mx-auto" src="/apple.icon.png" alt="" />
          <h2 className="text-3xl font-bold text-black">AirPods</h2>
          <p className="text-xl text-black">Share the joy.</p>
          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Shop</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/img4.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-50}0">
          <img className="mx-auto" src="/img4heading.png" alt="" />
          <h2 className="text-3xl font-bold text-white">iPhone 14 Pro</h2>
          <p className="text-xl text-white">A healthy leap ahead.</p>
          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/img5.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-50}0">
          <img className="mx-auto" src="/img5heading.png" alt="" />
          <h2 className="text-xl  text-black">Adventure awaits.</h2>

          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/img6.jpg" alt="" className="h-130" />
        <div className="absolute top-10 w-full text-center {border-2 border-amber-50}0">
          <img className="mx-auto" src="/img6heading.png" alt="" />
          <p className="text-xl text-black w-70 m-auto">
            Get up to 3% Daily Cash back with every purchase.
          </p>
          <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
            <a href="#">Learn more</a>
            <a href="#">Buy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Images;
