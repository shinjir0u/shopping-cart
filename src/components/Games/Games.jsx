import { useNavigate, useOutletContext } from "react-router-dom";
import { logoMapper } from "../Helpers/gameHelper.js";
import styles from "./Games.module.css";

function Games() {
  const { games, setSelectedIndex } = useOutletContext();
  const navigate = useNavigate();
  const handleClick = (id, index) => {
    setSelectedIndex(index);
    navigate(`game/${id}`);
  };

  return (
    <div className={styles.games}>
      <div className={`${styles.games__content} container`}>
        {games.map((game, index) => (
          <Game
            key={game.id}
            onClick={() => handleClick(game.id, index)}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}

function Game({ game, onClick }) {
  return (
    <div className={styles.game__card} onClick={onClick}>
      <img
        className={styles.game__image}
        src={game.background_image}
        alt={game.name}
      />
      <div className={styles.game__information}>
        <h2 className="game__name">{game.name}</h2>
        <div className={styles.game__platforms}>
          {game.parent_platforms.map((platform) => (
            <img
              className={styles.game__platform_logo}
              src={logoMapper[platform.platform.slug]}
              alt={`platform ${platform.platform.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
