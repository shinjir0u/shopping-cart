import PropTypes from "prop-types";

function Game({
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

Game.propTypes = {
  id: PropTypes.string.required,
  name: PropTypes.string.required,
  description: PropTypes.string.required,
  images: PropTypes.string.required,
  esrb_rating: PropTypes.string.required,
  developers: PropTypes.arrayOf(PropTypes.string).required,
  publishers: PropTypes.arrayOf(PropTypes.string).required,
  rating: PropTypes.number.required,
  rating_top: PropTypes.number.required,
  stores: PropTypes.arrayOf(PropTypes.string).required,
  website: PropTypes.string.required,
};

export default Game;
