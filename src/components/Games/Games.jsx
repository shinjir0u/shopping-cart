import { useOutletContext } from "react-router-dom";

function Games() {
  const { games } = useOutletContext();
  return (
    <div className="games">
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}

function Game({ game }) {
  return (
    <div className="game__card">
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
