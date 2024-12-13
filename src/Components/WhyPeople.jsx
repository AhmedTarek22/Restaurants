function WhePeople() {
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <div className="w-2/5 m-auto text-center">
        <h3 className="text-2xl">Why people choose us </h3>
        <p className="my-4 text-xl">
          Enjoy a healthy life by eating healthy foods that have extraordinary
          flavors that make your life healthier for today
        </p>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <div className="text-center">
          <figure className="w-16 h-20 m-auto">
            <img src="images/favorite.png" alt="" />
          </figure>
          <p className="text-xl font-semibold my-3">100% positive feedback</p>
          <p className="text-xs text-center">
            We care about our customers, that is why we get. 100% positive
            feedbacks
          </p>
        </div>
        <div className="text-center">
          <figure className="w-16 h-20 m-auto">
            <img src="images/Group 38.png" alt="" />
          </figure>
          <p className="text-xl font-semibold my-3">100% organic</p>
          <p className="text-xs text-center">
            We’re working with many resturants in your city to put food al one
            place
          </p>
        </div>
        <div className="text-center">
          <figure className="w-16 h-20 m-auto">
            <img src="images/Group 37.png" alt="" />
          </figure>
          <p className="text-xl font-semibold my-3">Easy online ordering</p>
          <p className="text-xs text-center">
            Once logged in. you can easily navigate around the site to complete
            your order
          </p>
        </div>
        <div className="text-center">
          <figure className="w-16 h-20 m-auto">
            <img src="images/Group 34.png" alt="" />
          </figure>
          <p className="text-xl font-semibold my-3">Fast guaranteed delivery</p>
          <p className="text-xs text-center">
            We take responsibility for making sure that order are delivered to
            you safely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhePeople;
