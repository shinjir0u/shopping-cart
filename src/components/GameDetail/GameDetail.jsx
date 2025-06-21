import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameDetail({
  id,
  name,
  description,
  images,
  esrb_rating,
  developers,
  publishers,
  rating,
  rating_top,
  stores,
  website,
}) {
  return (
    <div className={"game game__" + id}>
      <h1 className="game__name">{name}</h1>
      <p className="game__description">{description}</p>
      <div className="game__images">
        {images.map((image, index) => (
          <img key={index} src={image} alt="game__image" />
        ))}
      </div>
      <p className="game__esrb-rating">{esrb_rating}</p>
      <p className="game__developers">
        {developers.map(
          (developer, index) =>
            developer + (index === developers.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__publishers">
        {publishers.map(
          (publisher, index) =>
            publisher + (index === publishers.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__stores">
        {stores.map(
          (store, index) => store + (index === stores.length - 1 ? "" : ", ")
        )}
      </p>
      <p className="game__rating">{rating + " / " + rating_top}</p>
      <a href={website} className="game__website" target="_blank">
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
