import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import sampleGames from "../helperFiles/sampleGamesObject";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  const games = sampleGames.results;
  const selectedIndex = 2;
  return (
    <div className="app">
      <Menu />
      <Outlet context={{ games, selectedIndex }} />
      <Footer />
    </div>
  );
}

export default App;
