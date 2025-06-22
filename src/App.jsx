import { Outlet, useNavigate } from "react-router-dom";
import sampleGames from "../helperFiles/sampleGamesObject";

function App() {
  const games = sampleGames.results;
  const selectedIndex = 2;
  return <div className="app">
    <div className="container">
      <Outlet context={{games, selectedIndex}} />
    </div>
  </div>
}

export default App;
