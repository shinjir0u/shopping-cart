import { useNavigate, useOutletContext } from "react-router-dom";
import style from "./games.module.css";

function Games() {
  const { games } = useOutletContext();
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`game/${id}`);

  return (
    <div className={style.games}>
      <div className={`${style.games__content} container`}>
        {games.map((game) => (
          <Game key={game.id} onClick={() => handleClick(game.id)} game={game} />
        ))}
      </div>
    </div>
  );
}

function Game({ game, onClick }) {
  return (
    <div className={style.game__card} onClick={onClick}>
      <img className={style.game__image} src={game.background_image} alt={game.name} />
      <div className={style.game__information}>
        <h2 className="game__name">{game.name}</h2>
        <p className="game__store">
          {game.stores.map(
            (store, index) =>
              store.store.name + (index === game.stores.length - 1 ? "" : ", ")
          )}
        </p>
      </div>
    </div>
  );
}

export default Games;
