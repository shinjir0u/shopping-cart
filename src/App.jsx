import sampleGames from "../helperFiles/sampleGamesObject";
import sampleGame from "../helperFiles/sampleGameObject";
import "./App.css";
import Game from "./components/Game/Game";
import gameHelper from "./components/Helpers/gameHelper";

function App() {
  const game = gameHelper(sampleGame, sampleGames, 2);
  return <Game {...game} />;
}

export default App;
