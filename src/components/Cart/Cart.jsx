import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./Cart.module.css";

function Cart() {
  const { games, cartItems, setSelectedIndex } = useOutletContext();
  const navigate = useNavigate();
  const getGameIndex = (gameItem) =>
    games.findIndex((game) => game.id === gameItem.id);

  return (
    <div className="container">
      <div className={styles.items__content}>
        {cartItems.map((item) => (
          <CartItem
            item={item}
            onClick={() => {
              setSelectedIndex(getGameIndex(item));
              navigate(`/games/game/${item.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CartItem({ item, onClick = () => {} }) {
  return (
    <div className={styles.item__card} onClick={onClick}>
      <img
        className={styles.item__image}
        src={item.images[0]}
        alt={item.name}
      />
      <div className={styles.item__information}>
        <h2 className={styles.item__name}>{item.name}</h2>
      </div>
    </div>
  );
}

export default Cart;
