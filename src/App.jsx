import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { useEffect, useMemo, useState } from "react";
import { fetchGames } from "./GameAPI";

function App() {
  const [games, setGames] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getGames() {
      await fetchGames().then((games) => setGames(games.results));
    }
    getGames();
  }, []);

  const addItemToCart = (newItem) => {
    setCartItems((previousItems) => [...previousItems, newItem]);
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const contextValue = useMemo(
    () => ({
      games,
      selectedIndex,
      setSelectedIndex,
      cartItems,
      addToCart: (item) => addItemToCart(item),
      removeFromCart: (item) => removeItemFromCart(item),
    }),
    [games, selectedIndex, setSelectedIndex, cartItems]
  );

  return (
    <div className="app">
      <Menu cartItemsCount={cartItems.length} />
      <main>
        {games === null ? <p>Loading...</p> : <Outlet context={contextValue} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
