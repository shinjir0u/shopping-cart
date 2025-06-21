function gameHelper(game, games, selectedIndex) {
  return {
    id: game.id,
    name: game.name,
    description: game.description,
    images: games.results[selectedIndex].short_screenshots.map((image) => image.image),
    esrb_rating: game.esrb_rating.name,
    developers: game.developers.map((developer) => developer.name),
    publishers: game.publishers.map((publisher) => publisher.name),
    rating: game.rating,
    rating_top: game.rating_top,
    stores: game.stores.map((store) => store.store.name),
    website: game.website,
  };
}

export default gameHelper;
