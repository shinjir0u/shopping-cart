import App from "./App";
import Games from "./components/Games/Games";
import GameDetail from "./components/GameDetail/GameDetail";
import Home from "./components/Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/games",
        element: <Games />,
      },
      { path: "/games/game/:id", element: <GameDetail /> },
    ],
  },
];

export default routes;
