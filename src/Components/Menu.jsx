function Menu() {
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <h4 className="text-center text-3xl">Menu</h4>
      <div className="my-8 flex items-center gap-14">
        {/* images */}
        <div className="w-1/2 grid grid-cols-12 gap-3">
          <figure className="col-span-6 h-[350px]">
            <img
              className="rounded-lg w-full h-full"
              src="images/menu1.jpeg"
              alt=""
            />
          </figure>
          <figure className="col-span-6 h-[350px]">
            <img
              className="rounded-lg w-full h-full"
              src="images/menu2.jpeg"
              alt=""
            />
          </figure>
          <figure className="col-span-6 h-[350px]">
            <img
              className="rounded-lg w-full h-full"
              src="images/menu3.jpeg"
              alt=""
            />
          </figure>
          <figure className="col-span-6 h-[350px]">
            <img
              className="rounded-lg w-full h-full"
              src="images/menu4.jpeg"
              alt=""
            />
          </figure>
        </div>
        <div className="w-1/2 text-center">
          <p className="text-xl leading-normal md:leading-relaxed">
            If you want to enjoy the original food and drink, then you are
            definitely at the right place! we promise that you and your family
            will not remain indifferent ton our dushes
          </p>
          <button className="py-2 px-7 mt-8 bg-[#E86A33] rounded-md">
            See our menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
