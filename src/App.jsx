import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import sampleGames from "../helperFiles/sampleGamesObject";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const games = sampleGames.results;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItem) => {
    setCartItems((previousItems) => [...previousItems, newItem]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  return (
    <div className="app">
      <Menu cartItemsCount={cartItems.length} />
      <Outlet
        context={{
          games,
          selectedIndex,
          setSelectedIndex,
          cartItems,
          addToCart,
          removeFromCart,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
