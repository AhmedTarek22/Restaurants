import { useState } from "react";

function LatestNew() {
  const [LatestNew] = useState([
    {
      image: "images/drinks.png",
      title: "Drinks",
      desc: "Drinks, Refreshing sips of delight",
    },
    {
      image: "images/pizza.png",
      title: "Pizza",
      desc: "Pizza, Deliciously satisfying and universally loved",
    },
    {
      image: "images/pasta.png",
      title: "Italian pasta",
      desc: "Italian food, Mouthwatering flavors and culinary artistry",
    },
  ]);
  return (
    <div className="py-14 px-20 bg-[#030303] text-white">
      <div className="mb-16 w-fit m-auto text-center">
        <h4 className="text-3xl">Latest new</h4>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {LatestNew &&
          LatestNew.map((type, index) => (
            <div key={index} className="col-span-4">
              <figure className="w-[300px] h-[280px] m-auto">
                <img className="w-full h-full" src={type.image} alt="" />
              </figure>
              <div className="my-4 flex flex-col items-center gap-5">
                <span className="text-xl font-semibold">{type.title}</span>
                <span>{type.desc}</span>
                <button className="py-2 px-8 font-semibold rounded-md bg-[#E86A33]">
                  Learn more
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LatestNew;
