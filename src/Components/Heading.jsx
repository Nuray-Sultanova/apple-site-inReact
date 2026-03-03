const Heading = () => {
  return (
    <div className="w-200 mx-auto pt-30 text-center {border-2 border-amber-400}">
      <h1 className="text-4xl font-bold">iPhone 14</h1>
      <p className="text-xl m-2">Big and bigger.</p>
      <div className="text-blue-700 cursor-pointer flex gap-5 justify-center ">
        <a href="#">Learn more</a>
        <a href="#">Buy</a>
      </div>
    </div>
  );
};
export default Heading;
