import "./App.css";
import HowToOrder from "./Components/HowToOrder";
import Menu from "./Components/Menu";
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
    </>
  );
}

export default App;
