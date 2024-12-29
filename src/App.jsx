import "./App.css";
import BestSeller from "./Components/BestSeller";
import ContactUs from "./Components/ContactUs";
import HowToOrder from "./Components/HowToOrder";
import LatestNew from "./Components/LatestNew";
import Menu from "./Components/Menu";
import PopularDishes from "./Components/PopularDishes";
import Team from "./Components/Team";
import WhePeople from "./Components/WhyPeople";
import "./index.css";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Home />
      <WhePeople />
      <Menu />
      <Team />
      <HowToOrder />
      <PopularDishes />
      <BestSeller />
      <LatestNew />
      <ContactUs />
    </>
  );
}

export default App;
