import { useState } from "react";

const PageDishes = ({ pageTitle, dishContent }) => {
  const [dishes] = useState([
    "All categories",
    "Chicken",
    "Sushi",
    "Meat",
    "Sandwiches",
    "Dessert",
  ]);
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <div className="mb-16 w-fit m-auto text-center">
        <h4 className="text-3xl">{pageTitle}</h4>
      </div>
      <div>
        {/* navigation */}
        <div>
          <span></span>
          <span></span>
        </div>
        {/* Dishes */}
        <div className="flex justify-center gap-4">
          {dishes &&
            dishes.map((dish, index) => (
              <button
                key={index}
                className="py-2 px-8 text-xl font-semibold bg-transparent rounded-md border-2 border-[#E86A336E] hover:bg-[#E86A33] duration-300"
              >
                {dish}
              </button>
            ))}
        </div>
        {/* Dish content */}
        <div className="my-8 grid grid-cols-12 gap-4">
          {dishContent &&
            dishContent.map((dish, index) => (
              <div
                className="px-6 col-span-3 border-2 border-[#E86A336E] rounded-md"
                key={index}
              >
                <figure className="h-[225px] m-auto">
                  <img className="w-full h-full" src={dish.image} alt="" />
                </figure>
                <div className="">
                  <div className="flex justify-between">
                    <span className="text-xl font-semibold">{dish.title}</span>
                    <div className="flex items-center gap-1">
                      <img
                        className="w-6 h-6"
                        src="images/Star 12.png"
                        alt="star"
                      />
                      <span className="text-xl font-semibold">
                        {dish.rating}
                      </span>
                    </div>
                  </div>
                  <div className="my-4 flex justify-between">
                    <span className="text-2xl font-semibold">
                      {dish.price} $
                    </span>
                    <button className="py-2 px-3 font-semibold rounded-md bg-[#E86A33]">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PageDishes;
