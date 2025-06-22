import App from "./App";
import Games from "./components/Games/Games";
import GameDetail from "./components/GameDetail/GameDetail";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/games",
        element: <Games />,
      },
      { path: "/games/game/:id", element: <GameDetail /> },
    ],
  },
];

export default routes;
