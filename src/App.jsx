import sampleGames from "../helperFiles/sampleGamesObject";
import sampleGame from "../helperFiles/sampleGameObject";
import "./App.css";
import GameDetail from "./components/GameDetail/GameDetail";
import gameHelper from "./components/Helpers/gameHelper";

function App() {
  console.log(sampleGames.results);
  const game = gameHelper(sampleGame, sampleGames.results, 2);
  return <GameDetail {...game} />;
}

export default App;
