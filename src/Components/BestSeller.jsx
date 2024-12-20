import { useState } from "react";
import PageDishes from "./PageDishes";

function BestSeller() {
  const pageTitle = "Best seller";
  const [BestSeller] = useState([
    {
      image: "images/best1.png",
      title: "Kabsah",
      rating: "4",
      price: 30,
    },
    {
      image: "images/grillesChicken.png",
      title: "Grilles chicken",
      rating: "3.6",
      price: 20,
    },
    {
      image: "images/strips.png",
      title: "Strips",
      rating: "3.5",
      price: 15,
    },
    {
      image: "images/kabsah.png",
      title: "Kabsah",
      rating: "4",
      price: 30,
    },
    {
      image: "images/kabsah.png",
      title: "Kabsah",
      rating: "4",
      price: 30,
    },
  ]);
  return <PageDishes dishContent={BestSeller} pageTitle={pageTitle} />;
}

export default BestSeller;
