import { Outlet, useNavigate } from "react-router-dom";
import sampleGames from "../helperFiles/sampleGamesObject";

function App() {
  const games = sampleGames.results;
  const selectedIndex = 2;
  return <Outlet context={{games, selectedIndex}} />
}

export default App;
