import sampleGames from "../helperFiles/sampleGamesObject";
import Games from "./components/Games/Games";

function App() {
  return <Games games={sampleGames.results} />
}

export default App;
