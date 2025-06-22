import { useNavigate, useOutletContext } from "react-router-dom";

function Games() {
  const { games } = useOutletContext();
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`game/${id}`);

  return (
    <div className="games">
      {games.map((game) => (
        <Game key={game.id} onClick={() => handleClick(game.id)} game={game} />
      ))}
    </div>
  );
}

function Game({ game, onClick }) {
  return (
    <div className="game__card" onClick={onClick}>
      <img src={game.background_image} alt="game image" />
      <div className="game__information">
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
