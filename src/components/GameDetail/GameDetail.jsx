import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import gameHelper, { cartContainsItem } from "../Helpers/gameHelper";
import styles from "./GameDetail.module.css";
import Carousel from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import { fetchGame } from "../../GameAPI";

function GameDetail() {
  const [game, setGame] = useState(null);
  const [includedInCart, setIncludedInCart] = useState(false);
  const { games, selectedIndex, cartItems, addToCart, removeFromCart } =
    useOutletContext();

  useEffect(() => {
    async function getGame() {
      const selectedGame = await fetchGame(games[selectedIndex].id);
      const game = gameHelper(selectedGame, games, selectedIndex);
      setGame(game);
      setIncludedInCart(cartContainsItem(cartItems, game));
    }
    getGame();
  }, []);

  if (game === null) return <p>Loading...</p>;

  const addToCartObject = includedInCart
    ? { label: "Remove from Cart", callback: removeFromCart }
    : { label: "Add to Cart", callback: addToCart };

  return (
    <div className={`game game__  ${game.id}`}>
      <div className={`${styles.game__content} container`}>
        <h1 className={styles.game__name}>{game.name}</h1>
        <div className={styles.game}>
          <div className={styles.image}>
            <Carousel className={styles.image} images={game.images} />
          </div>
          <div className={styles.game__info}>
            <p className={styles.game__description}>{game.description}</p>
            <div className={styles.game__information}>
              <div>
                <p>ESRB Rating: </p>
                <p className="game__esrb-rating">{game.esrb_rating}</p>
              </div>
              <div>
                <p>Developers: </p>
                <p className="game__developers">
                  {game.developers.map(
                    (developer, index) =>
                      developer + (index === game.developers.length - 1 ? "" : ", ")
                  )}
                </p>
              </div>
              <div>
                <p>Publishers: </p>
                <p className="game__publishers">
                  {game.publishers.map(
                    (publisher, index) =>
                      publisher + (index === game.publishers.length - 1 ? "" : ", ")
                  )}
                </p>
              </div>
              <div>
                <p>Platforms: </p>
                <div className={styles.game__platforms}>
                  {game.platforms.map((platform, index) => (
                    <img
                      className={styles.game__platform_logo}
                      key={index}
                      src={platform}
                      alt="game platform"
                    />
                  ))}
                </div>
              </div>
              <div>
                <p>Rating: </p>
                <p className="game__rating">
                  {game.rating + " / " + game.rating_top}
                </p>
              </div>
              <div>
                <p>Official Website: </p>
                <a href={game.website} className="game__website" target="_blank">
                  {game.website}
                </a>
              </div>
            </div>
          </div>
        </div>
        <button
          className={styles.cart__button}
          onClick={() => {
            addToCartObject.callback(game);
            setIncludedInCart((previousValue) => !previousValue);
          }}
        >
          {addToCartObject.label}
        </button>
      </div>
    </div>
  );
}

GameDetail.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  esrb_rating: PropTypes.string.isRequired,
  developers: PropTypes.arrayOf(PropTypes.string).isRequired,
  publishers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  rating_top: PropTypes.number.isRequired,
  stores: PropTypes.arrayOf(PropTypes.string).isRequired,
  website: PropTypes.string.isRequired,
};

export default GameDetail;
