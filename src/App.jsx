import { Outlet, useNavigate } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import sampleGames from "../helperFiles/sampleGamesObject";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const games = sampleGames.results;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="app">
      <Menu />
      <Outlet context={{ games, selectedIndex, setSelectedIndex, cartItems }} />
      <Footer />
    </div>
  );
}

export default App;
