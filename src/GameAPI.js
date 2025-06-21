const API_KEY = import.meta.env.VITE_API_KEY;

function handleResponse(response) {
  if (!response.ok) throw new Error("Could not fetch the data");
  return response.json();
}

async function fetchGames() {
  const games = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then(handleResponse)
    .catch(console.log);
  return Promise.resolve(games);
}

async function fetchGame(gameID) {
  const game = await fetch(
    `https://api.rawg.io/api/games/${gameID}?key=${API_KEY}`
  )
    .then(handleResponse)
    .catch(console.log);
  return Promise.resolve(game);
}

export { fetchGames, fetchGame };
