import App from "./App";
import Games from "./components/Games/Games";
import GameDetail from "./components/GameDetail/GameDetail";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Error from "./components/Error/Error";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/games",
        element: <Games />,
      },
      { path: "/games/game/:id", element: <GameDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export default routes;
