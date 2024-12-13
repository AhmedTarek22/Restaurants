function HowToOrder() {
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <div className="w-fit m-auto text-center">
        <h4 className="text-center text-3xl">How to order</h4>
        <span className="my-4 block text-xl">Follow the steps</span>
      </div>
      <div className="px-16 my-10 text-center flex items-center justify-between">
        <div className="">
          <figure className="relative">
            <img src="images/Group 46.png" alt="" />
            <img
              className="absolute top-1/2 -translate-y-1/2 start-56"
              src="images/path1.png"
              alt=""
            />
          </figure>
          <span className="my-8 block text-xl font-semibold">
            Choose your order
          </span>
        </div>
        <div>
          <figure className="relative">
            <img src="images/Group 47.png" alt="" />
            <img
              className="absolute top-1/2 -translate-y-1/2 start-56"
              src="images/path2.png"
              alt=""
            />
          </figure>
          <span className="my-8 block text-xl font-semibold">
            Make your order
          </span>
        </div>
        <div>
          <figure className="relative">
            <img src="images/Group 48.png" alt="" />
            <img
              className="absolute top-1/2 -translate-y-1/2 start-56"
              src="images/path3.png"
              alt=""
            />
          </figure>
          <span className="my-8 block text-xl font-semibold">
            Confirm your order
          </span>
        </div>
        <div>
          <img src="images/Group 49.png" alt="" />
          <span className="my-8 block text-xl font-semibold">
            Food in the way
          </span>
        </div>
      </div>
    </div>
  );
}

export default HowToOrder;
