const logoMapper = {
  pc: "/assets/icons/pc-logo.png",
  playstation: "/assets/icons/playstation-logo.png",
  xbox: "/assets/icons/xbox-logo.png",
  ios: "/assets/icons/ios-logo.png",
  android: "/assets/icons/android-logo.png",
  mac: "/assets/icons/mac-logo.png",
  linux: "/assets/icons/linux-logo.png",
  nintendo: "/assets/icons/nintendo-logo.png",
  web: "/assets/icons/web-logo.png",
};

function gameHelper(game, games, selectedIndex) {
  return {
    id: game.id,
    name: game.name,
    description: game.description_raw,
    images: games[selectedIndex].short_screenshots.map((image) => image.image),
    esrb_rating: game.esrb_rating.name,
    developers: game.developers.map((developer) => developer.name),
    publishers: game.publishers.map((publisher) => publisher.name),
    rating: game.rating,
    rating_top: game.rating_top,
    platforms: game.parent_platforms.map(
      (platform) => logoMapper[platform.platform.slug]
    ),
    website: game.website,
  };
}

function cartContainsItem(cart, itemToCheck) {
  return cart.some((item) => item.id === itemToCheck.id);
}

export { cartContainsItem, logoMapper, gameHelper as default };
