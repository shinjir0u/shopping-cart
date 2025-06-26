import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";
import sampleGame from "../../../helperFiles/sampleGameObject";
import gameHelper from "../Helpers/gameHelper";
import styles from "./GameDetail.module.css";
import Carousel from "../Carousel/Carousel";

function GameDetail() {
  const { games, selectedIndex } = useOutletContext();
  const selectedGame = sampleGame;
  const game = gameHelper(selectedGame, games, selectedIndex);

  return (
    <div className={"game game__" + game.id}>
      <div className={`${styles.game__content} container`}>
        <h1 className={styles.game__name}>{game.name}</h1>
        <Carousel images={game.images} />
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
              {game.platforms.map(
                (platform, index) =>
                  <img className={styles.game__platform_logo} key={index} src={platform} alt="game platform" />
              )}
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
