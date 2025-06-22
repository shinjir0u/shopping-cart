import PropTypes from "prop-types";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import sampleGame from "../../../helperFiles/sampleGameObject";
import gameHelper from "../Helpers/gameHelper";

function GameDetail() {
  const { games, selectedIndex } = useOutletContext();
  const selectedGame = sampleGame;
  const game = gameHelper(selectedGame, games, selectedIndex);

  return (
    <div className={"game game__" + game.id}>
      <h1 className="game__name">{game.name}</h1>
      <p className="game__description">{game.description}</p>
      <div className="game__images">
        {game.images.map((image, index) => (
          <img key={index} src={image} alt="game__image" />
        ))}
      </div>
      <p className="game__esrb-rating">{game.esrb_rating}</p>
      <p className="game__developers">
        {game.developers.map(
          (developer, index) =>
            developer + (index === game.developers.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__publishers">
        {game.publishers.map(
          (publisher, index) =>
            publisher + (index === game.publishers.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__stores">
        {game.stores.map(
          (store, index) => store + (index === game.stores.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__rating">{game.rating + " / " + game.rating_top}</p>
      <a href={game.website} className="game__website" target="_blank">
        Website
      </a>
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
